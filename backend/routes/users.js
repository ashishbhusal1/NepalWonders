import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();
router.put("/", updateUser);
router.delete("/", deleteUser);
router.get("/", getSingleUser);
router.get("/", getAllUser);
export default router;
