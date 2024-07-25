import express from "express";
import {
  getAllUsers,
  getProfile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);
router.get("/getUsers", isAuthorized, getAllUsers);
router.get("/getProfile", isAuthorized, getProfile);

export default router;
