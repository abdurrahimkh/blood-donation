import express from "express";
import { create_request, requests_get_all } from "../controllers/request_controller.js";
const routes = express.Router();

routes.post("/create-request", create_request);
routes.get("/get-requests", requests_get_all);

export default routes;
