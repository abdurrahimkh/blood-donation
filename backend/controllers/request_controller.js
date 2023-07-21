import { Request } from "../models/request_donation.js";

export const create_request = async (req, res) => {
  const { blood_group, mobile_number } = req.body;
  if (!blood_group || !mobile_number) {
    return res.status(422).json({ error: "please fill all fields " });
  }

  try {
    const request = new Request({ ...req.body });

    const save_request = await request.save();

    if (save_request) {
      res.json({ message: "Request Submitted successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Something went wrong" });
  }
};

export const requests_get_all = async (req, res) => {
  try {
    let result = await Request.find();
    res.json({ data: result });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
