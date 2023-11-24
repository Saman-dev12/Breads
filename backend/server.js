const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/db");
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();
const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("helo");
});

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
