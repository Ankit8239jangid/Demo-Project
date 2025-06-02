
# ⚡ Charging Station API

A Node.js & Express.js REST API to manage users and electric vehicle charging stations. Uses MongoDB as the database.

## 🌐 Base URLs

```

User:              [http://localhost:3000/api/v1/user](http://localhost:3000/api/v1/user)
Charging Stations: [http://localhost:3000/api/v1/charging-stations](http://localhost:3000/api/v1/charging-stations)

````

---

## 🔐 User Endpoints

### 📥 Register a New User

**POST** `/api/v1/user/register`

**Body Example (JSON):**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
````

---

### 🔓 Login User

**POST** `/api/v1/user/login`

**Body Example (JSON):**

```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response Example:**

```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

## ⚡ Charging Station Endpoints

> 🔐 **All routes below require a valid JWT token in the `Authorization` header:**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 📍 Register a New Charging Station

**POST** `/api/v1/charging-stations/register`

**Body Example:**

```json
{
  "name": "GreenPower Station",
  "latitude": 26.9124,
  "longitude": 75.7873,
  "status": "Active",
  "powerOutput": 22,
  "connectorType": "Type2"
}
```

---

### 🔁 Update a Charging Station

**PUT** `/api/v1/charging-stations/update/:id`

**Body Example:**

```json
{
  "status": "Inactive",
  "powerOutput": 11
}
```

---

### ❌ Delete a Charging Station

**DELETE** `/api/v1/charging-stations/delete/:id`

---

### 📄 Get All Charging Stations

**GET** `/api/v1/charging-stations/stations`

---

## 🧪 Tools & Tech

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/charging-station-api.git
cd charging-station-api
npm install
npm run dev
```

> 🔑 Set your environment variables in a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/your_db
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

## 👨‍💻 Author

Made with ❤️ by Ankit Jangid




