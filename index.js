const express = require("express");
const app = express();
const router = require("express").Router();
var http = require("http").Server(app);
var io = require("socket.io")(http);

const bodyParser = require("body-parser");
const cors = require("cors");
const { db_connect } = require("./db_connection");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

// router.use(express.static(__dirname + "uploads/"));
app.use("/uploads", express.static("./uploads"));

//env var
const URL = process.env.MONGODB_URI;

//routes
app.use("/auth", authRouter);
app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("ECHIOFY API");
});

//socket connection

io.on("user_connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnected", () => {
    console.log("user disconnected");
  });
  //emmiting
  socket.on("chat_message", (msg) => {
    console.log("messgae: " + msg);
  });

  //broadcasting
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
  db_connect(URL);
});
