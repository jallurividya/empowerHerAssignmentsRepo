import { supabase } from "../config/supabaseConfig.js";

export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;
  if (!title || !userId) {
    return res.status(400).json({ message: "Title and userId required" });
  }
  const { data: user } = await supabase
    .from("userstodo")
    .select("id")
    .eq("id", userId)
    .single();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const { error } = await supabase.from("todos").insert([
    { title, description, user_id: userId }
  ]);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ message: "Todo added successfully" });
};

export const getUserTodos = async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const updates = req.body;
  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", todoId)
    .single();
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const { error } = await supabase
    .from("todos")
    .update(updates)
    .eq("id", todoId);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json({ message: "Todo updated successfully" });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json({ message: "Todo deleted successfully" });
};
