import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/users.model.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, role, password } = req.body;

  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  const isEmail = await User.findOne({ email });
  const isPhone = await User.findOne({ phone });
  if (isEmail || isPhone) {
    return next(
      new ErrorHandler("User already exist with this email or phone", 400)
    );
  }

  const user = await User.create({
    name,
    email,
    phone,
    role,
    password,
  });

  // res.status(201).json({
  //   success: true,
  //   message: "User registered successfully",
  //   user,
  // });

  sendToken(user, 201, res, "User registered successfully");
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  if (user.role !== role) {
    return next(new ErrorHandler("User with this role does not exist", 401));
  }

  // res.status(200).json({
  //   success: true,
  //   message: "User logged in successfully",
  //   user,
  // });

  sendToken(user, 200, res, "User logged in successfully");
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

export const getProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});
