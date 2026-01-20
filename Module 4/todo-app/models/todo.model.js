import { readFileSync, writeFileSync } from "fs"

const filePath = "./data/todos.json"

export const getAllTodos = () => {
  const data = readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export const saveTodos = (todos) => {
  writeFileSync(filePath, JSON.stringify(todos, null, 2))
}
