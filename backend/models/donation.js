import mongoose from "mongoose";
const donationSchema = new mongoose.Schema(
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
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    address: {
      type: String,
    },
    donation_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
export const Donation = mongoose.model("donation", donationSchema);
