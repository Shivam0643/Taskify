import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { FaSave } from "react-icons/fa";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  //  Fetch all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);
  // Create task
  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  //  Update task
  const updateTask = async (id) => {
    await api.put(`/tasks/${id}`, {
      title: editTitle,
      description: editDescription,
    });
    setEditId(null);
    setEditTitle("");
    setEditDescription("");
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  //  Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 mt-10">
      <div className="max-w-md mx-auto bg-cyan-950 p-4 rounded shadow-cyan-400 shadow-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-300">
          My Tasks
        </h1>

        {/*  Add Task */}
        <div className="mb-4 space-y-6">
          <label className="text-gray-200 text-xl">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 border-2 text-white border-cyan-800 rounded px-3 py-2 outline-none placeholder:text-gray-400"
            placeholder="Task title"
          />
          <label className="text-gray-200 text-xl">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 border-2 text-white border-cyan-800 rounded px-3 py-2 outline-none placeholder:text-gray-400"
            placeholder="Task description..."
            rows={3}
          />
          <button
            onClick={addTask}
            className="w-full font-semibold items-center text-center text-gray-200 text-xl bg-cyan-500 hover:bg-cyan-600 duration-300 rounded-md px-3 py-2"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 && (
          <p className="text-center text-gray-300">No tasks yet</p>
        )}

        {tasks.map((task) => (
          <div key={task._id} className="bg-cyan-800 p-3 rounded mb-3">
            {editId === task._id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full text-gray-900 border border-cyan-600 px-2 py-1 mb-2 rounded outline-none"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full text-gray-900 border border-cyan-600 px-2 py-1 mb-2 rounded outline-none"
                  rows={2}
                />
              </>
            ) : (
              <>
                <h3 className="font-semibold text-white">
                  Title: {task.title}
                </h3>
                {task.description && (
                  <p className="text-sm font-semibold text-gray-300">
                    Description: {task.description}
                  </p>
                )}
              </>
            )}

            <div className="flex gap-3 mt-2">
              {editId === task._id ? (
                <button
                  onClick={() => updateTask(task._id)}
                  className="text-green-400 text-sm"
                >
                  <FaSave size={25} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(task._id);
                    setEditTitle(task.title);
                    setEditDescription(task.description || "");
                  }}
                  className="text-blue-300"
                >
                  <BiEdit size={25} />
                </button>
              )}

              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-400"
              >
                <RiDeleteBin6Line size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
