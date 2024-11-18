import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config / Express Object
const app = express();
const port = 4000;

// middleware to handle JSON bodies
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api endpoint for foodRoute
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("`Your are in Home page, API working ");
});

app.get("/login", (req, res) => {
    res.send("you are in login page ");
});

app.listen(port, () => {
    console.log(`server is running on port ${port} by vikas `);
});

// mongodb+srv://greatstackuname:greatstackuname@cluster0.u2vg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
