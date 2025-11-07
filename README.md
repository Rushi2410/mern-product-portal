# MERN Product Listing Portal

A **full-stack MERN web application** where users can **sign up, log in, and manage their own products (Create, Read, Update, Delete)** while public users can view all listed products.  
Built with **MongoDB, Express.js, React, Node.js**, and **Material UI** for a clean, modern interface.

---

## Features

✅ User Authentication (Signup / Login) using **JWT**  
✅ Passwords hashed with **bcrypt**  
✅ Product **CRUD operations** (Add, Edit, Delete — user’s own products only)  
✅ **Public product listing** (no login required)  
✅ Responsive UI using **Material UI (MUI)**  
✅ REST API built with **Express.js + MongoDB (Mongoose)**  
✅ Secured routes with **JWT middleware**

---

## Project Structure

```
mern-product-portal/
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── productModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── controllers/
│       ├── authController.js
│       └── productController.js
│
├── frontend/
│   ├── src/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   ├── theme.js
│   │   ├── components/
│   │   │   ├── NavBar.jsx
│   │   │   ├── ProductCardMUI.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── ProductList.jsx
│   └── package.json
│
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js + Material UI |
| Backend | Node.js + Express.js |
| Database | MongoDB (Atlas or Local) |
| Authentication | JWT + bcrypt |
| Styling | MUI (Material UI) |
| API Requests | Axios |

---

## API Endpoints

| Method | Endpoint | Description | Auth |
|--------|-----------|--------------|------|
| POST | `/api/auth/signup` | Create account | ❌ |
| POST | `/api/auth/login` | Login, returns JWT token | ❌ |
| GET | `/api/products` | Get all products (public) | ❌ |
| POST | `/api/products` | Add new product | ✅ |
| PUT | `/api/products/:id` | Update user’s own product | ✅ |
| DELETE | `/api/products/:id` | Delete user’s own product | ✅ |

---

## Environment Variables

Create a `.env` file in the **backend** folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Example Mongo URI (Atlas):
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mern-demo
```

---

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/<your-username>/mern-product-portal.git
cd mern-product-portal
```

### Backend setup
```bash
cd backend
npm install
```
Run backend:
```bash
npm run dev
```
Server will start at → **http://localhost:5000**

---

### Frontend setup
Open another terminal:
```bash
cd frontend
npm install
```
Run frontend:
```bash
npm start
```
Frontend will start at → **http://localhost:3000**

---

## Deployment (Optional)

You can deploy easily using:
- **Render / Railway** → for backend
- **Vercel / Netlify** → for frontend

Make sure to:
- Update `baseURL` in `frontend/src/api.js` with your deployed backend URL.

---

## Screenshots

| Page | Screenshot |
|------|-------------|
| Signup | 🖼️ signup.png |
| Login | 🖼️ login.png |
| Dashboard (CRUD) | 🖼️ dashboard.png |
| Product List (Public) | 🖼️ productlist.png |

---

## Future Improvements

- Image upload for products  
- Search & filtering  
- Pagination  
- Dark mode support  
- Toast notifications for better UX  

---

## Author

**Rushikesh Andhale**  
rushikeshandhale1010@gmail.com  

