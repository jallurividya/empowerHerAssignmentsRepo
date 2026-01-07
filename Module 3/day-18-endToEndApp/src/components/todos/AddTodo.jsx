import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";
import * as todoService from "../../services/todo.service";

export default function AddTodo({ refresh }) {
    const [title, setTitle] = useState("");
    const { user } = useAuth();

    const handleAdd = async () => {
        if (!title.trim()) return;

        await todoService.addTodo(user.uid, {
            title,
            completed: false,
            createdAt: Date.now(),
        });

        setTitle("");
        refresh();
    };

    return (
        <div className="flex gap-2 mb-4">
            <Input
                placeholder="Enter new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={handleAdd}>Add</Button>
        </div>
    );
}
