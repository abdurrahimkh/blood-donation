import express from "express";
const routes = express.Router();

import { userSignup, userLogin, userUpdate, userGet, forgetPassword, resetPassword, verifyEmail, resendEmail } from "../controllers/auth_controller.js";
import { upload } from "../middleware/pic_upload.js";
import { protect } from "../middleware/user_middleware.js";
import { uploadPicture } from "../controllers/upload_pic.js";

routes.post("/user_signup", upload.single("pic"), userSignup);
routes.post("/verify-email/:token", verifyEmail);
routes.post("/resend-verification/:email", resendEmail);
routes.post("/user_login", userLogin);
routes.put("/user_update/:_id", protect, userUpdate);
routes.get("/user_get", protect, userGet);
routes.post("/forget_password", forgetPassword);
routes.post("/reset_password/:token", resetPassword);

// picture upload

routes.post("/picture_upload", protect, upload.single("pic"), uploadPicture);

export default routes;
