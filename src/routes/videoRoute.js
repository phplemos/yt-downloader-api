import { Router } from "express";
import { getVideoInfo } from "../controllers/videoController.js";
import { videoMiddleware } from "../middlewares/videoMiddleware.js";

const videoRoute = Router();

videoRoute.post("/", videoMiddleware, async (req, res) => {
  const { url } = req.body;
  const videoInfo = await getVideoInfo(url);
  res.status(200).json(videoInfo);
});

export default videoRoute;
