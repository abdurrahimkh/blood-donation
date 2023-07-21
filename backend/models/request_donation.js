import mongoose from "mongoose";
const requestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    blood_group: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: Number,
    },
    whatsapp_number: {
      type: Number,
    },
    city: {
      type: String,
    },
    hospital_location: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Request = mongoose.model("request", requestSchema);
