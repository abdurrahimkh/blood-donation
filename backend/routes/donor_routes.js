import express from "express";
const routes = express.Router();

import { donors_get, donors_get_all } from "../controllers/donor_controller.js";
import { protect } from "../middleware/user_middleware.js";
import { upload } from "../middleware/pic_upload.js";

// routes.post("/brand_create", protect, clothBrands_Create);
// routes.put("/brand_update/:_id", protect, clothBrands_Update);
routes.get("/donors", donors_get);
routes.get("/donors-all", donors_get_all);
// routes.delete("/brand_delete/:_id", protect, clothBrands_Delete);

// // cloths portion

// routes.post("/cloths_create", protect, upload.single("pic"), cloth_create);
// routes.get("/cloths", cloth_Get);
// routes.get("/cloths/:_id", cloth_Get_Single);
// routes.put("/cloths/:_id", protect, cloth_Update);
// routes.delete("/cloths/:_id", protect, cloth_Delete);

export default routes;
