import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
  createUser
} from "../controllers/userController.js";
import { verifyUser ,verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", verifyAdmin, createUser);
router.put("/:id", verifyUser,updateUser);
router.delete("/:id", verifyUser,deleteUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin,getAllUser);
export default router;
