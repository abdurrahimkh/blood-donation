import express from "express";
const routes = express.Router();

import { donors_get, donors_get_all } from "../controllers/donor_controller.js";

routes.get("/donors", donors_get);
routes.get("/donors-all", donors_get_all);

export default routes;
