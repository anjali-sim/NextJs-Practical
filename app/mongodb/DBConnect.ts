import mongoose from "mongoose";

const connect = async () => {
const mongodburl = process.env.NEXT_PUBLIC_MONGODB_URL;

// if (!mongodburl) {
//   throw new Error("MongoDB URL is not defined");
// }

  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(mongodburl!, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
