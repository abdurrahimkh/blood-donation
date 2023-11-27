import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobile_number: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Contact = mongoose.model("contact-us", contactSchema);
