import {prisma} from "../../lib/prisma.js";

const getTotalProducts = async () => {
  return prisma.product.count();
};

const getTotalOrders = async () => {
  return prisma.order.count();
};

const getPlacedOrders = async () => {
  return prisma.order.count({
    where: {
      status: "PLACED"
    }
  });
};

const getCancelledOrders = async () => {
  return prisma.order.count({
    where: {
      status: "CANCELLED"
    }
  });
};

const getProducts = async () => {
  return prisma.product.findMany({
    select: {
      stock: true
    }
  });
};

const getRecentMovements = async () => {
  return prisma.stockMovement.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc"
    },
    include: {
      product: {
        select: {
          id: true,
          sku: true,
          name: true
        }
      }
    }
  });
};

const dashboardQuery = { getCancelledOrders, getPlacedOrders, getTotalOrders, getTotalProducts, getRecentMovements, getProducts};

export default dashboardQuery;