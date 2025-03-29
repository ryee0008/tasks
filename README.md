# 📚 Egg.js RESTful API Project

A simple Node.js backend using [Egg.js](https://eggjs.org) framework. This project implements:

- **Book Management API** (CRUD)
- **Message Board API** (message submission, validation, pagination)

---

## 📁 Project Structure

```
backend/
├── app/                 # MVC: controller, service, model
│   ├── controller/
│   │   ├── book.js
│   │   └── message.js
│   ├── service/
│   │   ├── book.js
│   │   └── message.js
│   ├── model/
│   │   ├── book.js
│   │   └── message.js
├── config/              # Configuration files
├── mock/                # JSON data storage (books/messages)
├── Dockerfile           # Docker support
├── package.json         # Project metadata and scripts
```

---

## 🚀 How to Run (Locally)

### 1. Clone the project

```bash
git clone https://github.com/ryee0008/tasks.git
cd backend
```

### 2. Install dependencies (with faster registry)

```bash
npm install
```

### 3. Start the app

```bash
npm run dev
```

Server runs on:  
**`http://localhost:7001`**

---

## 📦 API Overview

### 📘 Book API

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /books           | Get all books       |
| POST   | /books           | Add a new book      |
| GET    | /books/:id       | Get book by ID      |
| PUT    | /books/:id       | Update a book       |
| DELETE | /books/:id       | Delete a book       |

---

### 💬 Message Board API

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | /messages        | Get messages (paginated)   |
| POST   | /messages        | Submit a new message       |

- Supports `?page=1&limit=5` for pagination
- Validations:
  - `message` is required
  - `username` max length: 20

---

## 🧪 Postman Collections

- ✅ [`Library API.postman_collection.json`](./Library%20API%20(Localhost).postman_collection.json)
- ✅ [`Message Board API.postman_collection.json`](./Message%20Board%20API.postman_collection.json)

Use these to test endpoints via Postman.

---

## 📌 Notes

- Data is persisted to local JSON files in `/mock/`
- Code is written using OOP and modular structure

