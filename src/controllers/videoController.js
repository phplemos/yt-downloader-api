import ytdl from "@distube/ytdl-core";

export const getVideoInfo = async (url) => {
  try {
    return await ytdl.getBasicInfo(url);
  } catch (error) {
    return { error: error.message };
  }
};
