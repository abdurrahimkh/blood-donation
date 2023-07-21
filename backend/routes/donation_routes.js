import express from "express";
import { submit_donation, donations_get_all } from "../controllers/donation_controller.js";
const routes = express.Router();

routes.post("/submit-donation", submit_donation);
routes.get("/get-donations", donations_get_all);

export default routes;
