import { prisma } from "../../lib/prisma.js";
import stockQuery from "../db/stockQuery.js";
import orderQuery from "../db/orderQuery.js";
import { StockMovementType } from "../../generated/prisma/index.js";

const createOrderService = async ( userId, items) => {
  return prisma.$transaction(async (tx) => {

    for (const item of items) {

      const product = await stockQuery.findProductById(
        item.productId,
        tx
      );

      if (!product) {
        throw new Error("Product not found");
      }

      if (product.stock < item.quantity) {
        throw new Error(
          `Insufficient stock for ${product.name}`
        );
      }
    }

    const order = await orderQuery.createOrder(
      userId,
      tx
    );

    for (const item of items) {

      await orderQuery.createOrderItem(
        order.id,
        item.productId,
        item.quantity,
        tx
      );

      const updated = await stockQuery.decreaseStock(
        item.productId,
        item.quantity,
        tx
      );

      await stockQuery.createStockMovement(
        item.productId,
        StockMovementType.ORDER_PLACED,
        item.quantity,
        updated.stock,
        tx
      );
    }

    return order;
  });
};

export const cancelOrderService = async ( orderId) => {
  return prisma.$transaction(async (tx) => {

    const order = await orderQuery.findOrderById(
      orderId,
      tx
    );

    if (!order) {
      throw new Error("Order not found");
    }

    if (order.status === "CANCELLED") {
      throw new Error("Order already cancelled");
    }

    for (const item of order.items) {

      const updated = await stockQuery.increaseStock(
        item.productId,
        item.quantity,
        tx
      );

      await stockQuery.createStockMovement(
        item.productId,
        StockMovementType.ORDER_CANCELLED,
        item.quantity,
        updated.stock,
        tx
      );
    }

    return orderQuery.cancelOrder(
      orderId,
      tx
    );
  });
};

const getOrdersService = async () => {
  return prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true, 
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const orderService =  {createOrderService, cancelOrderService, getOrdersService}

export default orderService;