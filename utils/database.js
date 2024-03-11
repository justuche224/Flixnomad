// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "notes",
//     });

//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;
let client = null;

export async function connectToDatabase() {
  if (client) {
    return client;
  }

  if (!MONGODB_URI) {
    console.log("MongoDb URI not found.");
  }

  try {
    client = await MongoClient.connect(MONGODB_URI);
    console.log("Connected to MongoDb successfully.");
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
