import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verifyToken: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

// In nextjs, we connect each time with MongoDB, because of that we are using the below syntax
const User = mongoose.models.User || mongoose.model("User", userSchema);
// const User = mongoose.model("User", userSchema);

export default User;
