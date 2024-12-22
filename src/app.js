import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Tudo funcionado!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
