import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

// export const clothBrands_Create = (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(422).json({ error: "Please fill the name " });
//   }
//   clothBrand
//     .findOne({ name })
//     .then((already) => {
//       if (already) {
//         return res.status(422).json({ message: "Already registered" });
//       }
//       const brand = new clothBrand(req.body);
//       brand
//         .save()
//         .then((brandsaved) => {
//           res.json({ message: "Register successfully" });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const clothBrands_Update = async (req, res) => {
//   const { _id } = req.params;

//   try {
//     await clothBrand.findByIdAndUpdate({ _id }, req.body);
//     res.json({ message: "updated successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };
// export const clothBrands_Get = async (req, res) => {
//   let filter = { isActive: true };
//   if (req.query._id) {
//     filter = { _id: req.query._id.split(","), isActive: true };
//   }
//   try {
//     const result = await clothBrand.find(filter);
//     res.json({ data: result });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };
// export const clothBrands_Delete = async (req, res) => {
//   const { _id } = req.params;

//   try {
//     await clothBrand.findByIdAndDelete({ _id });
//     res.json({ message: "deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };

// // cloths portion

// export const cloth_create = (req, res) => {
//   const { name, brand, size, color, price, gender, cloth_type } = req.body;
//   let picture = req.file.filename;
//   if (!name || !brand || !size || !color || !price || !gender || !cloth_type) {
//     return res.status(422).json({ error: "please fill the name " });
//   }
//   cloths
//     .findOne({ name })
//     .then((already) => {
//       if (already) {
//         return res.status(422).json({ message: "already exist" });
//       }
//       const newClohts = new cloths({ ...req.body, image: picture });
//       newClohts
//         .save()
//         .then((saved) => {
//           res.status(200).json({ success: true, message: "uploaded successfully" });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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
    let result = await User.find({ is_active: true, is_savedlife: false }).select("-password");
    res.json({ data: result });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
// export const cloth_Get_Single = async (req, res) => {
//   const id = req.params._id;
//   try {
//     const result = await cloths.findById(id).populate("brand");
//     res.json({ data: result });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };

// export const cloth_Update = async (req, res) => {
//   const { _id } = req.params;

//   try {
//     await cloths.findByIdAndUpdate({ _id }, req.body);
//     res.json({ message: "updated successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };

// export const cloth_Delete = async (req, res) => {
//   const { _id } = req.params;

//   try {
//     await cloths.findByIdAndDelete({ _id });
//     res.json({ message: "deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong!" });
//   }
// };
