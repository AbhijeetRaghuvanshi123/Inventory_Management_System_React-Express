import { prisma } from "../../lib/prisma.js";

const createProduct = async ({sku, name}) => {
    return await prisma.product.create({
        data: {
            sku: sku,
            name: name,
            stock: 0
        }
    })
}

const getAllProducts = async () => {
    return await prisma.product.findMany();
}

const getProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id: id
        }
    })

    return product;
}

const updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: {
            id: id
        },
        data
    })
}

const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: {
            id: id
        }
    })
}

const productQuery = {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct};

export default productQuery;