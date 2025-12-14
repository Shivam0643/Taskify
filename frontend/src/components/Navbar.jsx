import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-br from-fuchsia-500 to-blue-400 text-white lg:px-10 lg:py-7 px-4 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-3xl">Task<span className="text-4xl text-cyan-400">ify</span> </Link>
      <div className="space-x-4 text-sm">
        {token ? (
          <div className="flex items-center justify-center lg:gap-10 gap-2">
            <button onClick={logout} className="bg-gray-200 hover:bg-gray-300 duration-200 text-lg font-semibold text-center text-cyan-600 px-3 py-1 rounded-full">
            Logout
          </button>
          <button 
          onClick={()=>navigate("/dashboard")}
          className="bg-gray-200 hover:bg-gray-300 duration-200 text-lg font-semibold text-center text-cyan-600 px-3 py-1 rounded-full">
            Dashboard
          </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-8">
            <Link to="/login" className="text-lg py-1 px-4 text-center bg-blue-400 hover:bg-blue-300 duration-200 rounded-full">SignIn</Link>
            <Link to="/register" className="text-lg py-1 px-4 text-center bg-blue-400 hover:bg-blue-300 duration-200 rounded-full">SignUp</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
