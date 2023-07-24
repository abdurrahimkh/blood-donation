import express from "express";
import { submit_donation, donations_get_all, donation_get_one } from "../controllers/donation_controller.js";
const routes = express.Router();

routes.post("/submit-donation", submit_donation);
routes.get("/get-donations", donations_get_all);
routes.get("/get-donation-by-user/:id", donation_get_one);

export default routes;
