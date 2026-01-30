import { supabase } from "../config/supabaseConfig.js";
export const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (existingUser) {
    return res.status(409).json({ message: "Email already registered" });
  }
  const { data, error } = await supabase.from("userstodo").insert([
    { name, email, password }
  ]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ message: "User registered successfully" });
};
export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const { error } = await supabase
    .from("userstodo")
    .delete()
    .eq("id", userId);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json({ message: "User and related todos deleted" });
};
