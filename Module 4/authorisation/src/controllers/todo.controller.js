import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  const { title } = req.body;

  const { error } = await supabase.from("todoss").insert([
    { title, completed: false, userid: req.user.userid }
  ]);

  if (error)
    return res.status(400).json({ message: error.message });

  res.status(201).json({ message: "Todo created" });
};

export const getTodos = async (req, res) => {
  const { data } = await supabase
    .from("todoss")
    .select("*")
    .eq("userId", req.user.userid);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todoss")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId)
    return res.status(403).json({ message: "Unauthorized" });

  await supabase.from("todoss").update(req.body).eq("id", id);
  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todoss")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId)
    return res.status(403).json({ message: "Unauthorized" });

  await supabase.from("todoss").delete().eq("id", id);
  res.json({ message: "Todo deleted" });
};
