export const videoMiddleware = (req, res, next) => {
  const { url } = req.body;
  const regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  if (url === undefined || url === null || url === "") {
    return res.status(400).json({ error: "URL is required" });
  }
  if (regex.test(url)) {
    return next();
  }
  return res.status(400).json({ error: "Invalid URL" });
};
