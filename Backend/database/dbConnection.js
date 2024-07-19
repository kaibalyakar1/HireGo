import mongoose, { mongo } from "mongoose";
// export const dbConnection = mongoose
//   .connect(process.env.MONGO_URI, {
//     dbName: "HireGo",
//   })
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.log(err));

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "HireGo",
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
};
