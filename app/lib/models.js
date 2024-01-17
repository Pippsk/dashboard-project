import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: number,
      min: 0,
      required: true,
    },
    stock: {
      type: number,
      min: 0,
      required: true,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
      default: false,
    },
    size: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.model.Product || mongoose.model("Product", userSchema);
