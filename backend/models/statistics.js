import mongoose from "mongoose";
const statisticsSchema = new mongoose.Schema(
  {
    donations_count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export const Statistics = mongoose.model("statistics", statisticsSchema);
