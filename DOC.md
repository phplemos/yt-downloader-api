# Objetos

## videoInfo

    title: response.videoDetails.title,
      description: response.videoDetails.description,
      thumbnail: response.videoDetails.thumbnails[0].url,
      duration: response.videoDetails.lengthSeconds,
      views: response.videoDetails.viewCount,
      qualitys: response.formats,
    
