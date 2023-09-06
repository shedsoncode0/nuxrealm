import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    bio: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
