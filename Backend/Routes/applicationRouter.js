import express from "express";
import {
  employerGetAllApplications,
  jobseekerApplicationDelete,
  jobSeekerGetAllApplications,
  postApplication,
} from "../controllers/application.controller.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.get("/employer/getAll", isAuthorized, employerGetAllApplications);
router.get("/jobseeker/getAll", isAuthorized, jobSeekerGetAllApplications);
router.delete(
  "/deleteApplication/:id",
  isAuthorized,
  jobseekerApplicationDelete
);
router.post("/createApplication", isAuthorized, postApplication);
export default router;
