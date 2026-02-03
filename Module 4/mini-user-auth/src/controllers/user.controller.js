import bcrypt from "bcrypt";
import { supabase } from "../config/supabaseClient.js";
export const signupUser = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // 1. Validate inputs
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check for duplicate email
    const { data: existingUser } = await supabase
      .from("usersauth")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert user
    const { error } = await supabase.from("usersauth").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword,
      },
    ]);

    if (error) throw error;

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const getMyProfile = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name query parameter is required" });
    }

    const { data: user, error } = await supabase
      .from("usersauth")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (error) throw error;

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
