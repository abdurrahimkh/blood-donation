import express from "express";
import { create_message, messages_get_all } from "../controllers/contact_controller.js";
const routes = express.Router();

routes.post("/post-message", create_message);
routes.get("/get-messages", messages_get_all);

export default routes;
