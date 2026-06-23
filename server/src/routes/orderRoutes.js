import { Router } from "express";
import { createOrderPOST, cancelOrderPATCH } from "../controllers/orderController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const orderRouter = Router();

orderRouter.post('/', ensureAuth, createOrderPOST);
orderRouter.patch('/:id/cancel', ensureAuth, cancelOrderPATCH);

export default orderRouter;