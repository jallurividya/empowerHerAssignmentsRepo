import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/todos");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-96 p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full">Login</Button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">Signup</Link>
        </p>
      </form>
    </div>
  );
}
