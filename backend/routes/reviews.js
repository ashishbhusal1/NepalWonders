import express from "express";
import { createReview } from "../controllers/reviewController";
import { verifyUser } from "../utils/verifyToken";

const router = express.Router();

router.post("/:tourId",createReview);
export default router;
