import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  updateTour,
} from "../controllers/tourController.js";
const router = express.Router();

router.post("/", createTour);
router.put("/", updateTour);
router.delete("/", deleteTour);
router.get("/", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);
export default router;
