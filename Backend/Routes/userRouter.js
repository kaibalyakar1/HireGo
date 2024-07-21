import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", register);
router.get("/login", login);
router.get("/logout", isAuthorized, logout);

export default router;
