const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("connected:", socket.id);

  socket.on("message", (msg) => {
    io.emit("message", {
      ...msg,
      serverTs: Date.now()
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("Socket server running on http://localhost:4000");
});
