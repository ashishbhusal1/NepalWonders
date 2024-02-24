import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
} from "../controllers/tourController.js";
const router = express.Router();

router.post("/", createTour);
router.put("/", updateTour);
router.delete("/", deleteTour);
router.get("/", getSingleTour);
router.get("/", getAllTour);
export default router;
