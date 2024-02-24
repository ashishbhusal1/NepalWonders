import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//database connection
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

app.get("/", (req, res) => {
  res.send("api is working");
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
