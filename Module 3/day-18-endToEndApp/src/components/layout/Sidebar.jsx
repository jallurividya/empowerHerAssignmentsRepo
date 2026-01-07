export default function Sidebar({ todos=[], selectedId, setSelectedId }) {
    return (
        <aside className="w-64 border-r p-4 overflow-y-auto">
            <h2 className="font-semibold mb-4">Your Todos</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => setSelectedId(todo.id)}
                        className={`cursor-pointer p-2 rounded ${selectedId === todo.id ? "bg-gray-200" : "hover:bg-gray-100"
                            }`}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </aside>
    );
}