import { Router } from "express";
import { createOrderPOST, cancelOrderPATCH, getOrdersGET } from "../controllers/orderController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const orderRouter = Router();

orderRouter.post('/', ensureAuth, createOrderPOST);
orderRouter.patch('/:id/cancel', ensureAuth, cancelOrderPATCH);
orderRouter.get('/', ensureAuth, getOrdersGET);

export default orderRouter;
