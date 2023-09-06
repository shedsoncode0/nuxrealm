/** @format */

import express, { json, urlencoded } from "express";
import cors from "cors";
import color from "colors";
import morgan from "morgan";
import { createServer } from "http";

// require("dotenv").config();

// const connectDB = require("./server/database/connection");

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
// connectDB();

// The main Server
const app = express();
const server = createServer(app);

// Server Middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));


// Route Middlewares


// Start the server
server.listen(PORT, () => {
  console.log("Server is up an Running on POST " + PORT);
});
