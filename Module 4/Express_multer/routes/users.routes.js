import express from "express";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";
import { readFileSync, writeFileSync } from "fs";
import { v4 as uuid } from "uuid";

const router = express.Router();

router.post(
    "/signup",
    upload.single("profile"),
    uniqueEmail,
    async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ error: "Profile image is required" });
            }

            const { name, email, password } = req.body;

            const uploadResult = await cloudinary.uploader.upload(
                `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
            );

            const db = JSON.parse(readFileSync("./db.json", "utf-8"));

            const newUser = {
                id: uuid(),
                name,
                email,
                password,
                profilePic: uploadResult.secure_url
            };

            db.users.push(newUser);
            writeFileSync("./db.json", JSON.stringify(db, null, 2));

            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    profilePic: newUser.profilePic
                }
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

export default router;
