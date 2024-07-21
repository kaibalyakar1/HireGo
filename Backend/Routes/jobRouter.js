import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  postJob,
  updateJob,
} from "../controllers/job.controller.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getJobs", getAllJobs);

router.post("/createJob", isAuthorized, postJob);

router.get("/getAllJobs", isAuthorized, getMyJobs);
router.put("/updateJob/:id", isAuthorized, updateJob);
router.delete("/deleteJob/:id", isAuthorized, deleteJob);

export default router;
