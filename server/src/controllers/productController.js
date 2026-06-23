import productService from "../services/productService.js";

const createProductPOST = async (req, res) => {
    try {
        const product = await productService.createProductService(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getAllProductsGET = async (req, res) => {
    try {
        const products = await productService.getAllProductsService();

        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getProductByIdGET = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productService.getProductByIdService(id);

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

const updateProductPUT = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await productService.updateProductService(id, req.body);

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updated
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteProductDELETE = async (req, res) => {
  try {
    const { id } = req.params;

    await productService.deleteProductService(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export {createProductPOST, getAllProductsGET, getProductByIdGET, updateProductPUT, deleteProductDELETE};
