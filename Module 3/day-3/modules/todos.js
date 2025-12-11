import { displayTodos } from "./displayTodos.js";
export function loadTodos() {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please Login First!");
    window.location.href = "login.html";
    return;
  }
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      displayTodos(data);
    })
    .catch(err => console.log(err));
}
