import express from "express";
import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());
mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use("/books", bookRoute);
app.get("/", (req, res) => {
  console.log(req);
  res.status(234).send("Welcome to Mern Project");
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
