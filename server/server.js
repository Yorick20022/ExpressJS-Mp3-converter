const express = require('express')
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-static');
const { spawn } = require('child_process');
const cors = require("cors")

const app = express()
const port = 5000

app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/download', async (req, res) => {
  let videoUrl = req.query.URL;
  try {
    const videoInfo = await ytdl.getInfo(videoUrl);
    const videoTitle = videoInfo.videoDetails.title;

    // Set appropriate headers for MP3 format
    res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp3"`);
    res.header('Content-Type', 'audio/mpeg');

    // Download the video using ytdl-core
    const videoStream = ytdl(videoUrl, {
      filter: format => format.container === 'mp4',
      quality: 'highestaudio',
    });

    const ffmpegProcess = spawn(ffmpeg, [
      '-i',
      'pipe:0',
      '-f',
      'mp3',
      '-codec:a',
      'libmp3lame',
      '-b:a',
      '320k',
      'pipe:1',
    ]);

    videoStream.pipe(ffmpegProcess.stdin);
    ffmpegProcess.stdout.pipe(res);

  } catch (error) {
    res.status(500).send('Error downloading the video.');
  }
});
