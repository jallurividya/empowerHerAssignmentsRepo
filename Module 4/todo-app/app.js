import express from "express"
import todoRoutes from "./routes/todo.routes.js"

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())

// Routes
app.use("/todos", todoRoutes)

// Global Error Handler (optional but recommended)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
