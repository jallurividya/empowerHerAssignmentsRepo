import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import * as todoService from "../../services/todo.service";

export default function UpdateTodoModal({ todo, close, refresh }) {
  const [title, setTitle] = useState(todo.title);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!title.trim()) return;
    setLoading(true);
    try {
      await todoService.updateTodo(todo.id, { title });
      refresh(); // reload todos after update
      close();   // close the modal
    } catch (error) {
      console.error("Error updating todo:", error);
      alert("Failed to update todo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new todo title"
          />
        </div>
        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={close}>Cancel</Button>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
