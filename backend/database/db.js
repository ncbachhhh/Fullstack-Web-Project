import mongoose from "mongoose";
const db = {
  connect: async () => {
    const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

    try {
      await mongoose.connect(MONGODB_CONNECTION_STRING);
      console.log("Connected to database");
    } catch (error) {
      console.log("Connect failed");
    }
  },
};

export default db;
