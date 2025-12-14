# 🚀 Taskify – MERN Task Management App

Taskify is a **full-stack MERN application** that allows users to securely manage their daily tasks with authentication and CRUD functionality. It is built with a **frontend-primary focus**, featuring a clean, responsive UI and a robust backend.

🌐 **Live Demo (Frontend):** [https://taskify-1-ehmn.onrender.com/](https://taskify-1-ehmn.onrender.com/)

🌐 **Live API (Backend):** [https://taskify-n8lw.onrender.com/](https://taskify-n8lw.onrender.com/)

📦 **GitHub Repository:** [https://github.com/Shivam0643/Taskify.git](https://github.com/Shivam0643/Taskify.git)

---

## ✨ Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication
* Protected routes (only logged-in users can access tasks)

### 📝 Task Management

* Create tasks with **title & description**
* View all user-specific tasks
* Edit tasks inline
* Delete tasks

### 🎨 Frontend (Primary Focus)

* Fully responsive UI (mobile-first)
* Modern dark theme with clean UX
* Built using **React + Tailwind CSS**
* Icons for better usability (Edit, Delete, Save)

### ⚙️ Backend

* RESTful APIs using **Node.js & Express**
* MongoDB with Mongoose
* Secure user-task relationship
* Middleware-based authentication

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT Authentication
* bcrypt
* dotenv
* CORS

---

## 📁 Project Structure

```
Taskify/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   └── main.jsx
└── README.md
```

---

## 🔑 API Endpoints

### Auth Routes

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | /api/user/register | Register new user  |
| POST   | /api/user/login    | Login user         |
| GET    | /api/user/me       | Get logged-in user |

### Task Routes (Protected)

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | /api/tasks/create     | Create task   |
| GET    | /api/tasks/get        | Get all tasks |
| PUT    | /api/tasks/update/:id | Update task   |
| DELETE | /api/tasks/delete/:id | Delete task   |

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shivam0643/Taskify.git
cd Taskify
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

<img width="1920" height="916" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/0a827913-e57d-4987-98c4-f1fe5a4d2fc6" />
<img width="1920" height="894" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/5512eb39-191c-4a9f-8deb-f346802cf3e8" />



---

## 📌 Deployment

* **Frontend:** Render
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 👨‍💻 Author

**Shivam Lashkari**
MERN Stack Developer (Fresher)

* GitHub: [https://github.com/Shivam0643](https://github.com/Shivam0643)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

⭐ If you like this project, don’t forget to star the repo!
