
# ⚡ EV Charging Station Manager

A full-stack web application to manage and visualize EV Charging Stations. Built using **Node.js**, **Express**, **MongoDB**, and **React.js**, with deployment on **Vercel** (Frontend) and **Render/AWS/Firebase** (Backend).

---

## 🚀 Live Demo

- **Frontend:** [Click Here to Visit](https://evoltsoft-assignment-eta.vercel.app/)
- **Backend API:** [Public API Endpoint](https://evoltsoft-assignment-rmuo.onrender.com/api/v1)

---

## 📌 Features

### ✅ Backend (Node.js + Express + MongoDB)
- JWT-based **User Authentication**
  - Signup
  - Login (JWT Token Generation)
- **CRUD Operations for Charging Stations**
  - Add new charger
  - Edit charger info
  - Delete charger
  - List all chargers (Public Route)
- **Charger Schema Includes**:
  - Name
  - Location (Latitude, Longitude)
  - Status (Active/Inactive)
  - Power Output (kW)
  - Connector Type

### 🌐 Frontend (React.js)
- 🔐 **Login Screen** with JWT Auth
- 📄 **Charger Listing Page**
  - View all onboarded chargers
  - Apply filters: Status, Power Output, Connector Type
  - Add/Edit/Delete Chargers
- 🗺️ **Map View** using OpenStreetMap
  - Shows all chargers on map with markers
  - Clicking marker shows charger details

---

## 🛠️ Tech Stack

| Layer        | Technology                   |
|--------------|-------------------------------|
| Frontend     | React.js, Axios, Tailwind CSS   |
| Backend      | Node.js, Express.js           |
| Database     | MongoDB (Mongoose ODM)        |
| Auth         | JWT (JSON Web Tokens)         |
| Deployment   | Vercel (Frontend), Render (Backend) |
| Map API      |  OpenStreetMap   

---

## 🔒 Authentication Flow

1. **POST** `/api/auth/signup` – Register new user  
2. **POST** `/api/auth/login` – Login, receive JWT  
3. Use JWT to access protected routes for managing chargers

---

## 🧭 Charger Management API (Protected)

please check the bacon API redmi.md file 

## 📍 Map Integration

- Map auto-plots all chargers based on latitude & longitude.
- Marker click shows:
  - Name
  - Power Output
  - Status
  - Connector Type

---

## ⚙️ Getting Started (Local Setup)

### 🔧 Backend

```bash
cd backend
npm install
# Setup your .env file (see .env.example)
npm run dev

🔧 Frontend

cd frontend
npm install
npm run dev



submitted by Ankit Jangid 