import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/users.model.js";
import jwt from "jsonwebtoken";
export const isAuthorized = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);
  next();
});
