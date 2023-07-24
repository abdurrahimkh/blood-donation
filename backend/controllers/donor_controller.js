import { User } from "../models/user.js";
import { Statistics } from "../models/statistics.js";

export const donors_get = async (req, res) => {
  let filter = { is_active: true, is_savedlife: false };
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const skip_index = (page - 1) * limit;
  if (req.query._id) {
    filter._id = req.query._id.split(",");
  }
  if (req.query.blood_group) {
    filter.blood_group = req.query.blood_group;
  }
  if (req.query.city) {
    filter.city = req.query.city;
  }
  console.log(filter);

  try {
    let result = await User.find(filter).select("-password").skip(skip_index).limit(limit);
    result.password = null;
    const count = await User.countDocuments(filter);
    res.json({ data: result, count, per_page: limit });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};

export const donors_get_all = async (req, res) => {
  try {
    let result = await User.find().select("-password");
    const donations_count = await Statistics.find();

    res.json({ data: result, donations_count: donations_count[0].donations_count });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
