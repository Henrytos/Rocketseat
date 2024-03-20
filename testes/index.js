const { downloadVideo } = require("yt-get");

const musics = [
  "https://www.youtube.com/watch?v=ZNpTHk7zfzE",
  "https://www.youtube.com/watch?v=DDv-6A-2iiQ",
];
for (let i = 0; i < musics.length; i++) {
  let videoURL = musics[i];

  downloadVideo(videoURL)
    .then(() => {
      console.log("Video downloaded successfully.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
