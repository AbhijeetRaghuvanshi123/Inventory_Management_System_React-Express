const findProductById = async (id, tx) => {
    return await tx.product.findUnique({
        where: { id: id }
    });
}

const increaseStock = async (id, quantity, tx) => {
    return await tx.product.update({
        where: { id: id },
        data: {
            stock: {
                increment: quantity
            }
        }
    });
};

const decreaseStock = async (id, quantity, tx) => {
    return await tx.product.update({
        where: { id: id },
        data: {
            stock: {
                decrement: quantity
            }
        }
    });
};

const createStockMovement = async ( id, type, quantity, stockAfter, tx) => {
    return await tx.stockMovement.create({
        data: {
            id,
            type,
            quantity,
            stockAfter
        }
    });
};

const getStockHistory = async (id, prisma) => {
    return prisma.stockMovement.findMany({
        where: {
            id: id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

const getAllStockHistory = async (prisma) => {
    return prisma.findMany({
        include: {
            product: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

const stockQuery = {findProductById, increaseStock, decreaseStock, createStockMovement, getStockHistory, getAllStockHistory}

export default stockQuery;
