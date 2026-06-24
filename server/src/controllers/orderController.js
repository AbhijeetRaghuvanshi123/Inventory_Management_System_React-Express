import orderService from "../services/orderService.js";

const createOrderPOST = async (req, res) => {
    try {

        const order = await orderService.createOrderService(
            req.user.id,
            req.body.items
        );

        res.status(201).json({
            success: true,
            data: order
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

const cancelOrderPATCH = async (req, res) => {
    try {

        const order = await orderService.cancelOrderService(
            req.params.id
        );

        res.status(200).json({
            success: true,
            data: order
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

const getOrdersGET = async (req, res) => {
    try {
        const orders = await orderService.getOrdersService();

        res.status(200).json({
            success: true,
            data: orders,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch orders",
        });
    }
}

export { createOrderPOST, cancelOrderPATCH , getOrdersGET};