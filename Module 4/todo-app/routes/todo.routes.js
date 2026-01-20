import express from "express"
import {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controller.js"

const router = express.Router()

router.get("/", fetchTodos)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)

export default router
