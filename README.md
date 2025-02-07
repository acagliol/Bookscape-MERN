# 📚 Bookscape - Full Stack Bookstore Application

Bookscape is a **full-stack bookstore web application** built with the **MERN (MongoDB, Express, React, Node.js) stack**. This project allows users to browse, purchase books, and manage their orders, while admins can manage book inventory and track sales.  

This project was developed as a portfolio piece showcasing **full-stack development, API integration, authentication, and state management**.

---

## 🚀 Features

### **User Features**
- 📖 **Browse & Search Books** – View books by categories, search for specific books.
- 🛒 **Shopping Cart & Checkout** – Add/remove books from the cart, and proceed to secure checkout.
- 📝 **Order Management** – View order history.
- 🛡 **User Authentication** – Register/login securely with Firebase authentication.
- ⭐ **Book Recommendations** – Get personalized book suggestions.
- 📢 **News & Events** – Stay updated on book-related events and news.

### **Admin Features**
- 📚 **Manage Books** – Add, update, and delete books from the inventory.
- 📊 **Dashboard Analytics** – Track revenue and sales trends.
- 👤 **Admin Authentication** – Secure login for admins.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React.js** – UI development
- 🎨 **TailwindCSS** – Styling
- 🌍 **React Router** – Client-side routing
- 📦 **Redux Toolkit** – Global state management
- 🔥 **Firebase** – Authentication & user management
- 📡 **Axios** – API communication

### **Backend**
- 🛠 **Node.js & Express.js** – Server-side framework
- 🗄 **MongoDB & Mongoose** – NoSQL database
- 🔐 **JWT Authentication** – Secure user authentication
- 📊 **Admin Stats API** – Backend analytics

### **Deployment**
- 🚀 **Vercel** – Frontend deployment
- 🌍 **MongoDB Atlas** – Cloud-hosted database

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/bookscape.git
cd bookscape
```

## 2️⃣ Install Dependencies  

### Backend Setup  
```bash
cd backend
npm install
```

### Backend Setup  
```bash
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in both the backend and frontend with the following:

#### Backend `.env`
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```


# Environment Setup

## Backend `.env`
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Frontend `.env.local`
```ini
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

## 🎬 Running the Project

### 1️⃣ Start the Backend
```bash
cd backend
npm run dev
```

### 2️⃣ Start the Frontend
```bash
cd frontend
npm run dev
```

Once started, the project will be available at:

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:5000](http://localhost:5000)

## 🔥 API Endpoints

| Method  | Endpoint           | Description             |
|---------|--------------------|-------------------------|
| GET     | `/api/books`       | Get all books          |
| POST    | `/api/books`       | Add a new book (Admin) |
| PUT     | `/api/books/:id`   | Update a book (Admin)  |
| DELETE  | `/api/books/:id`   | Delete a book (Admin)  |
| GET     | `/api/orders`      | Get user orders        |
| POST    | `/api/orders`      | Create a new order     |
| POST    | `/api/auth/admin`  | Admin login            |


## 🚀 Deployment

The project is deployed using **Vercel** (Frontend) and **MongoDB Atlas** (Database).

- **Live Website**: *Bookscape*
- **Backend API**: Hosted on **Render/Vercel**

To deploy your own version:

```bash
cd frontend
vercel deploy
```

---

## 📌 Future Improvements

- 📦 **Wishlist Feature** – Allow users to save books for later.
- 🌍 **Multilingual Support** – Enable multiple language options.
- 🚀 **Stripe Payments** – Integrate a real payment system.
- 📊 **Advanced Analytics** – Improve admin sales tracking.

---

## ✨ Credits

This project was developed as part of my portfolio to showcase **full-stack development skills** with modern web technologies.

📧 **Contact**: [your.email@example.com](mailto:your.email@example.com)  
🔗 **GitHub**: [github.com/your-username](https://github.com/your-username)

