import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    blood_group: {
      type: String,
      required: true,
      enum: ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
    },
    donation_history: {
      type: Array,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: Number,
    },
    whatsapp_number: {
      type: Number,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    image: {
      type: String,
      default: "avatar.png",
    },
    is_savedlife: {
      type: Boolean,
      default: false,
    },
    last_savedlife: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_email_verified: {
      type: Boolean,
      default: false,
    },
    reset_password_token: {
      type: String,
    },
    reset_password_expires: {
      type: Number,
    },
    email_verification_token: {
      type: String,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("user", UserSchema);
