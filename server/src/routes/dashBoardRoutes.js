import { Router } from "express";
import { getDashboardGET } from "../controllers/dashboardController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const dashboardRouter = Router();

dashboardRouter.get('/', ensureAuth, getDashboardGET);

export default dashboardRouter;