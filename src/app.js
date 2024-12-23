import express from "express";
import videoRoute from "./routes/videoRoute.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/video", videoRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
