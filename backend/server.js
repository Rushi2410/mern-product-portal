// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

// dotenv.config();
// const app = express();

// // middleware
// app.use(cors({
//   origin: process.env.CLIENT_URL || "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.json());

// // connect db
// connectDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);

// // simple root
// app.get("/", (req, res) => {
//   res.send("MERN Product Portal API");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

// ✅ Allow both local and deployed frontends
const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://mern-product-portal-r2au42fru-rushikesh-andhales-projects.vercel.app", // vercel frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

// connect db
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// simple root
app.get("/", (req, res) => {
  res.send("MERN Product Portal API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

