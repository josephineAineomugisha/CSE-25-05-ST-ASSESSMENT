import { Router } from "express";
import {
  getDashboard,
  createProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getDashboard);
router.post("/products", createProduct);

export default router;
