import * as todoService from "../../services/todo.service";
import { Button } from "../ui/button";

export default function TodoItem({ todo, refresh, onEdit }) {
    const toggleStatus = async () => {
        await todoService.updateTodo(todo.id, {
            completed: !todo.completed,
        });
        refresh();
    };

    const deleteTodo = async () => {
        await todoService.deleteTodo(todo.id);
        refresh();
    };

    return (
        <div className="flex justify-between items-center p-3 border rounded">
            <div>
                <h3
                    className={`font-medium ${todo.completed ? "line-through text-gray-400" : ""
                        }`}
                >
                    {todo.title}
                </h3>
                <p className="text-sm text-gray-500">
                    {todo.completed ? "Completed" : "Pending"}
                </p>
            </div>

            <div className="flex gap-2">
                <Button variant="outline" onClick={toggleStatus}>
                    Toggle
                </Button>
                <Button variant="secondary" onClick={() => onEdit(todo)}>
                    Edit
                </Button>
                <Button variant="destructive" onClick={deleteTodo}>
                    Delete
                </Button>
            </div>
        </div>
    );
}

// import { Button } from "../ui/button";
// import * as todoService from "../../services/todo.service";

// export default function TodoItem({ todo, refresh, onEdit }) {
//     const toggleStatus = async () => {
//         await todoService.updateTodo(todo.id, { completed: !todo.completed });
//         refresh();
//     };

//     const removeTodo = async () => {
//         await todoService.deleteTodo(todo.id);
//         refresh();
//     };

//     return (
//         <div className="flex items-center justify-between border p-4 rounded">
//             <div>
//                 <h3 className={todo.completed ? "line-through text-gray-500" : ""}>
//                     {todo.title}
//                 </h3>
//             </div>

//             <div className="flex gap-2">
//                 <Button size="sm" variant="outline" onClick={toggleStatus}>
//                     {todo.completed ? "Undo" : "Done"}
//                 </Button>
//                 <Button size="sm" onClick={() => onEdit(todo)}>
//                     Edit
//                 </Button>
//                 <Button size="sm" variant="destructive" onClick={removeTodo}>
//                     Delete
//                 </Button>
//             </div>
//         </div>
//     );
// }