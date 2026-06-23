import { OrderStatus } from "../../generated/prisma/index.js";

const createOrder = async (userId, tx) => {
    return tx.order.create({
        data: {
            userId
        }
    });
};

const createOrderItem = async ( orderId, productId, quantity, tx ) => {
    return tx.orderItem.create({
        data: {
            orderId,
            productId,
            quantity
        }
    });
};

const findOrderById = async (orderId, tx) => {
  return tx.order.findUnique({
    where: { id: orderId },
    include: {
      items: true
    }
  });
};

const cancelOrder = async (orderId, tx) => {
  return tx.order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.CANCELLED
    }
  });
};

const orderQuery = { createOrder, findOrderById, createOrderItem, cancelOrder};

export default orderQuery;