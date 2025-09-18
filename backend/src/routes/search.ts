import { Router } from "express";
import { searchController } from "../controllers/searchController";

const router = Router();

router.get("/:code", searchController);

export default router;
