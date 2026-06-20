# 🚀 AI Interview Agent

An intelligent full-stack **AI Interview Agent** built using the **MERN Stack** that enables users to prepare for technical interviews through interactive mock interview sessions. The platform provides secure authentication, interview management, credit-based access, and seamless online payments using Razorpay.

---

## ✨ Features

* 🔐 Secure JWT Authentication
* 👤 User Registration & Login
* 🎯 Mock Interview Management
* 📋 Interview Dashboard
* 💳 Razorpay Payment Gateway Integration
* 💰 Credit-Based Interview System
* 📜 Interview History
* 🔒 Protected Routes
* 📱 Fully Responsive UI
* ⚡ Fast and Modern User Experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Razorpay API

### Database

* MongoDB Atlas

---

## 📁 Project Structure

```text
AI-Interview-Agent/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── assets/
│   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── utils/
│   └── server.js
│
├── README.md
└── package.json
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/VarunKumar025-collab/AI-Interview-Agent.git
cd AI-Interview-Agent
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Run Backend

```bash
nodemon run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

| Variable            | Description                       |
| ------------------- | --------------------------------- |
| PORT                | Backend Server Port               |
| MONGODB_URI         | MongoDB Connection String         |
| JWT_SECRET          | Secret Key for JWT Authentication |
| RAZORPAY_KEY_ID     | Razorpay Public Key               |
| RAZORPAY_KEY_SECRET | Razorpay Secret Key               |

---

## 💳 Payment Flow

1. User logs in to the platform.
2. Selects a suitable credit plan.
3. Backend creates a Razorpay order.
4. User completes the payment securely.
5. Payment is verified on the server.
6. Credits are added to the user's account.

---

## 🔐 Authentication

* User Registration
* User Login
* JWT-Based Authorization
* Protected API Routes
* Secure Password Storage

---

## 📸 Screenshots

Add screenshots for:

* Home Page
* Login Page
* Dashboard
* Interview Page
* Payment Page
* User Profile

---

## 🚀 Future Enhancements

* AI-generated interview questions
* Voice-based interviews
* Video interview support
* Interview analytics
* Resume analysis
* Admin dashboard
* Email notifications
* Dark mode

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 👨‍💻 Author

**Varun Kumar**

* MERN Stack Developer
* Competitive Programmer
* LeetCode | Codeforces | CodeChef

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.
