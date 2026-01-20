import { readFileSync } from "fs";

const uniqueEmail = (req, res, next) => {
  if (!req.body || !req.body.email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const { email } = req.body;

  const data = JSON.parse(readFileSync("./db.json", "utf-8"));

  const existingUser = data.users.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
};

export default uniqueEmail;
