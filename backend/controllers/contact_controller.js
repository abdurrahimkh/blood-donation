import { Contact } from "../models/contact_us.js";

export const create_message = async (req, res) => {
  try {
    const message = new Contact({ ...req.body });

    const save_message = await message.save();

    if (save_message) {
      res.json({ message: "Message delivered" });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Something went wrong" });
  }
};

export const messages_get_all = async (req, res) => {
  try {
    let result = await Contact.find();
    res.json({ data: result });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
