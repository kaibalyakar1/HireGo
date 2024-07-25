import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/job.controller.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getMyJobs", isAuthorized, getMyJobs);

router.post("/createJob", isAuthorized, postJob);

router.get("/getAllJobs", isAuthorized, getAllJobs);
router.put("/updateJob/:id", isAuthorized, updateJob);
router.delete("/deleteJob/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSingleJob);

export default router;
