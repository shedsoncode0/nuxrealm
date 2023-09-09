/** @format */

import express, { json, urlencoded } from "express";
import cors from "cors";
import color from "colors";
import morgan from "morgan";
import { createServer } from "http";
import { Server } from "socket.io";

// require("dotenv").config();

// const connectDB = require("./server/database/connection");

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
// connectDB();

// The main Server
const app = express();
const server = createServer(app);

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.listen(server);

let characters = [];

const generateRandomPosition = () => {
  return [Math.random() * 3, 0, Math.random() * 3];
};

const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

io.on("connection", (socket) => {
  console.log("user connected");

  characters.push({
    id: socket.id,
    position: generateRandomPosition(),
    // hairColor: generateRandomHexColor(),
    // topColor: generateRandomHexColor(),
    // bottomColor: generateRandomHexColor(),
  });

  socket.emit("hello");

  io.emit("characters", characters);

  socket.on("move", (position) => {
    const character = characters.find(
      (character) => character.id === socket.id
    );
    character.position = position;
    io.emit("characters", characters);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    characters.splice(
      characters.findIndex((character) => character.id === socket.id),
      1
    );
    io.emit("characters", characters);
  });
});

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
