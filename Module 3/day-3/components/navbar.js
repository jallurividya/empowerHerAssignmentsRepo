export function Navbar() {
  let loggedIn = localStorage.getItem("isLoggedIn") === "true";

  return `
    <nav id="navbar">
      <a href="index.html">Home</a>
      <a href="signup.html">Signup</a>
      <a href="login.html">Login</a>
      ${
        loggedIn
          ? `<a href="todos.html">Todos</a>`
          : `<a href="login.html">Todos</a>`
      }
    </nav>
  `;
}
