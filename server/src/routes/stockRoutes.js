import { Router } from "express";
import { addProductStockGET, getAllStockHistoryGET, getStockHistoryGET } from "../controllers/stockController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const stockRouter = Router();

stockRouter.get('/history/:productId', ensureAuth, getStockHistoryGET);
stockRouter.get('/history', ensureAuth,getAllStockHistoryGET);
stockRouter.post('/add', ensureAuth,addProductStockGET);

export default stockRouter;