import productQuery from "../db/productQuery.js";

const createProductService = async (data) => {
    if (!data.sku || !data.name) {
        throw new Error("SKU and Name are required!");
    }

    return await productQuery.createProduct(data);
}

const updateProductService = async (id, data) => {
    const product = productQuery.getProductById(id);

    if (!product) {
        throw new Error("Product not found!");
    }

    return await productQuery.updateProduct(id, data);
}

const deleteProductService = async (id) => {
    const product = await productQuery.getProductById(id);

    if (!product) {
        throw new Error("Product not found!");
    }

    return await productQuery.deleteProduct(id);
};

const getAllProductsService = async () => {
    const products = await productQuery.getAllProducts();

    if(!products){
        throw new Error("No Product found!")
    }

    return products;
}

const getProductByIdService = async (id) => {
    const product = await productQuery.getProductById(id);

    if(!product){
        throw new Error("Product not found!");
    }

    return product;
}

const productService = {createProductService, updateProductService, deleteProductService, getAllProductsService, getProductByIdService};

export default productService;