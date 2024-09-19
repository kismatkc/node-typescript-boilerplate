import mongoose from "mongoose";

export default async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_CONNECTIONSTRING || ""
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Connection to mongodb fialed");
  }
}
