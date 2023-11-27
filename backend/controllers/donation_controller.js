import { Donation } from "../models/donation.js";

export const submit_donation = async (req, res) => {
  const { blood_group, mobile_number } = req.body;
  if (!blood_group || !mobile_number) {
    return res.status(422).json({ error: "please fill all fields " });
  }

  try {
    const donation = new Donation({ ...req.body });

    const save_donation = await donation.save();

    if (save_donation) {
      res.json({ message: "Donation Submitted successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Something went wrong" });
  }
};

export const donations_get_all = async (req, res) => {
  try {
    let result = await Donation.find();
    res.json({ data: result });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};

export const donation_get_one = async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await Donation.find({ donation_by: id });
    if (resp) {
      return res.json({ data: resp });
    }
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
