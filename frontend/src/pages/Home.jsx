import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
    try {
      const res = await api.get("/user/me");
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-cyan-950 p-6 rounded shadow-cyan-400 shadow-md text-center lg:w-120 lg:h-120">
        {user ? (
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-gray-100 mb-2 mt-10">
              Welcome!, {user.name}👋
            </h1>
            <p className="text-gray-200 text-xl">
              Manage your tasks efficiently
            </p>
          </div>
        ) : (
          <p className="text-lg text-gray-200 mt-40">Please! SignUp First</p>
        )}
        <button
        onClick={()=>navigate("/dashboard")}
        className="mt-40 w-50 font-semibold items-center text-center text-gray-200 text-xl bg-cyan-500 hover:bg-cyan-600 duration-300 rounded-md px-3 py-2">
        Create Task
      </button>
      </div>
    </div>
  );
}
