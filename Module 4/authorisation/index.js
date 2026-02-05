import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import todoRoutes from "./src/routes/todo.routes.js";
import { checkDBConnection } from "./src/dbHealthCheck.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/", authRoutes);
app.use("/todoss", todoRoutes);
const startServer = async () => {
    const isDBConnected = await checkDBConnection()
    if (!isDBConnected) {
        console.log("Server not started due to db connection failure");
        process.exit(1);
    }
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
startServer()