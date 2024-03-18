import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// In nextjs, we connect each time with MongoDB, because of that we are using the below syntax
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
