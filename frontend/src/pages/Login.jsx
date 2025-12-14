import React from "react";
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/user/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form onSubmit={submit} className="bg-gray-600 p-6 rounded-lg shadow-gray-500 shadow-lg w-100">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-100">Login to Dashboard</h2>
        <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-100">Email</label>
        <input
        type="email"
          className="py-2 px-3 bg-gray-300 text-black text-sm outline-none rounded-sm mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-100">Password</label>
            <input
          type="password"
          className="py-2 px-3 bg-gray-300 text-black text-sm outline-none rounded-sm mb-2"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        </div>
        <button className="text-lg w-full bg-blue-500 hover:bg-blue-600 duration-200 text-white mt-8 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
