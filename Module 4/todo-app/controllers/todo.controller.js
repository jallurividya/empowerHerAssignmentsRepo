import { getAllTodos, saveTodos } from "../models/todo.model.js"

// GET /todos
export const fetchTodos = (req, res, next) => {
  try {
    const todos = getAllTodos()
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

// POST /todos
export const createTodo = (req, res, next) => {
  try {
    const { title } = req.body

    if (!title) {
      return res.status(400).json({ message: "Title is required" })
    }

    const todos = getAllTodos()

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    todos.push(newTodo)
    saveTodos(todos)

    res.status(201).json(newTodo)
  } catch (error) {
    next(error)
  }
}

// PUT /todos/:id
export const updateTodo = (req, res, next) => {
  try {
    const { id } = req.params
    const { completed } = req.body

    const todos = getAllTodos()
    const todo = todos.find(t => t.id === Number(id))

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" })
    }

    todo.completed = completed
    saveTodos(todos)

    res.status(200).json(todo)
  } catch (error) {
    next(error)
  }
}

// DELETE /todos/:id
export const deleteTodo = (req, res, next) => {
  try {
    const { id } = req.params
    const todos = getAllTodos()

    const filteredTodos = todos.filter(t => t.id !== Number(id))

    if (todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" })
    }

    saveTodos(filteredTodos)
    res.status(200).json({ message: "Todo deleted successfully" })
  } catch (error) {
    next(error)
  }
}
