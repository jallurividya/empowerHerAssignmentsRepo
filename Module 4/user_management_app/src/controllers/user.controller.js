import { supabase } from "../config/supabaseConfig.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
/* CREATE USER */
export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  const { name, email, password, age, role } = req.body;
  try {
    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();
    if (existingUser)
      return res.status(409).json({ message: "Email already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.from("users").insert([
      {
        name,
        email,
        password: hashedPassword,
        age,
        role,
      },
    ]);
    if (error) throw error;
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/* GET ALL USERS */
export const getAllUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email, age, role, created_at");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
/* GET USER BY ID */
export const getUserById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email, age, role, created_at")
    .eq("id", id)
    .single();
  if (!data) return res.status(404).json({ message: "User not found" });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
/* UPDATE USER */
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .update(req.body)
    .eq("id", id)
    .select();
  if (!data || data.length === 0)
    return res.status(404).json({ message: "User not found" });
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "User updated successfully" });
};
/* DELETE USER */
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .select();
  if (!data || data.length === 0)
    return res.status(404).json({ message: "User not found" });
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "User deleted successfully" });
};