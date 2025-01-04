import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("mongodb already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "real-estate",
    });
    initialized = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log("mongodb connection error", error);
  }
};
