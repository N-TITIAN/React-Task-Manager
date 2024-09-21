import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(username, password);
      navigate("/dashboard");
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-24 w-full ">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-100 p-4 w-full bg-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-100 p-4 w-full bg-transparent"
      />
      <button type="submit" className="bg-[#9747ff] p-2">Login</button>
    </form>
  );
};

export default Login;
