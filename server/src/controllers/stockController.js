import stockService from "../services/stockService.js";

const getStockHistoryGET = async (req, res) => {
    try {
        const history =
            await stockService.getStockHistoryService(
                req.params.productId
            );

        res.status(200).json({
            success: true,
            data: history
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message
        });

    }
}

const getAllStockHistoryGET = async (req, res) => {
    try {
        const history = await stockService.getAllStockHistoryService();

        res.status(200).json({
            success: true,
            data: history
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

const addProductStockGET = async (req, res) => {
    try {
        console.log(req.body);
        const { productId, quantity } = req.body;

        if (!productId || !quantity) {
            return res.status(400).json({
                success: false,
                message: "productId and quantity are required"
            });
        }

        const result = await stockService.addStockService(productId, quantity);

        res.status(200).json({
            success: true,
            message: "Stock added successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export { getStockHistoryGET, getAllStockHistoryGET, addProductStockGET };