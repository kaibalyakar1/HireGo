class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.name === "CastError") {
    err.message = `Resource not found. Invalid: ${err.path}`;
    err.statusCode = 404;
  }
  if (err.code === 11000) {
    err.message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err.statusCode = 400;
  }
  if (err.name === "JsonWebTokenError") {
    err.message = `Json Web Token is invalid, try again`;
    err.statusCode = 400;
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    err.message = message;
    err.statusCode = 400;
  }
  if (err.name === "TokenExpiredError") {
    err.message = `Json Web Token is expired, try again`;
    err.statusCode = 400;
  }
};

export default ErrorHandler;
