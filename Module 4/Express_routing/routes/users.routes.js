import express from "express";
import { readFileSync, writeFileSync } from "fs";

const router = express.Router();
const DB_PATH = "./db.json";

// Helper functions
const readDB = () => JSON.parse(readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
    writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

const generateId = (items) => {
  if (items.length === 0) return 101;
  return items[items.length - 1].id + 1;
};

/* CREATE USER */
router.post("/add", (req, res) => {
    const db = readDB();
    const newUser = { id: generateId(db.users), ...req.body };

    db.users.push(newUser);
    writeDB(db);

    res.status(201).json(newUser);
});

/* GET ALL USERS */
router.get("/", (req, res) => {
    const db = readDB();
    res.status(200).json(db.users);
});

/* GET SINGLE USER */
router.get("/:userId", (req, res) => {
    const db = readDB();
    const user = db.users.find(u => u.id == req.params.userId);

    if (!user)
        return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
});

/* UPDATE USER */
router.put("/update/:userId", (req, res) => {
    const db = readDB();
    const index = db.users.findIndex(u => u.id == req.params.userId);

    if (index === -1)
        return res.status(404).json({ message: "User not found" });

    db.users[index] = { ...db.users[index], ...req.body };
    writeDB(db);

    res.status(200).json(db.users[index]);
});

/* DELETE USER */
router.delete("/delete/:userId", (req, res) => {
    const db = readDB();
    const index = db.users.findIndex(u => u.id == req.params.userId);

    if (index === -1)
        return res.status(404).json({ message: "User not found" });

    const deletedUser = db.users.splice(index, 1);
    writeDB(db);

    res.status(200).json(deletedUser);
});

export default router;
