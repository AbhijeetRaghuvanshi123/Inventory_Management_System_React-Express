import { Router } from "express";
import { createProductPOST, getAllProductsGET, getProductByIdGET, updateProductPUT, deleteProductDELETE } from "../controllers/productController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const productRouter = Router();

productRouter.get('/', ensureAuth, getAllProductsGET);
productRouter.post('/', ensureAuth, createProductPOST);
productRouter.get('/:id', ensureAuth, getProductByIdGET);
productRouter.put('/:id', ensureAuth, updateProductPUT);
productRouter.delete('/:id', ensureAuth, deleteProductDELETE);

export default productRouter;