import { prisma } from "../../lib/prisma.js";
import stockQuery from "../db/stockQuery.js";
import { StockMovementType } from "../../generated/prisma/index.js";

const addStockService = async (productId, quantity) => {
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than 0");
    }

    return await prisma.$transaction(async (tx) => {
        const product = await stockQuery.findProductById(productId, tx);

        if (!product) {
            throw new Error("Product not found");
        }

        const updated = await stockQuery.increaseStock(
            productId,
            quantity,
            tx
        );

        await stockQuery.createStockMovement(
            productId,
            StockMovementType.STOCK_IN,
            quantity,
            updated.stock,
            tx
        );

        return updated;
    });
};

const reduceStockService = async (productId, quantity) => {
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than 0");
    }

    return await prisma.$transaction(async (tx) => {
        const product = await stockQuery.findProductById(productId, tx);

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.stock < quantity) {
            throw new Error("Insufficient stock");
        }

        const updated = await stockQuery.decreaseStock(
            productId,
            quantity,
            tx
        );

        await stockQuery.createStockMovement(
            productId,
            StockMovementType.STOCK_OUT,
            quantity,
            updated.stock,
            tx
        );

        return updated;
    });
};

const getStockHistoryService = async (id) => {
    const product = stockQuery.findProductById(id, prisma);

    if (!product) {
        throw new Error("Product not found");
    }

    return stockQuery.getStockHistory(id);
}

const getAllStockHistoryService = async () => {
    return stockQuery.getAllStockHistory();
}

const stockService = { addStockService, reduceStockService, getStockHistoryService, getAllStockHistoryService };

export default stockService;