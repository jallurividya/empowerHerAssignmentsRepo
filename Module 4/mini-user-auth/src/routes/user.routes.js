import express from "express";
import { signupUser, getMyProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signupUser);
router.get("/myprofile", getMyProfile);

export default router;
