export function displayTodos(data) {
  let container = document.getElementById("todoContainer");
  container.innerHTML = "";
  data.forEach(todo => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
    `;
    container.appendChild(div);
  });
}
