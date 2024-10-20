<template>
  <section class="blog-view-content-container">
    <div class="video-container">
      <video
        src="@/assets/video_backgrounds/5335804-hd_1920_1080_30fps.mp4"
        type="video/mp4"
        autoplay
        loop
        muted
      ></video>
      <div class="blog-view-title-container">
        <h1>Mowa o pieniądzach</h1>
        <h2>Blog o tematyce finansowej</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.blog-view-content-container {
  margin: 0;
  padding: 0;
  margin-top: 70px;
}

.video-container {
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.video-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: -1;
}

video {
  position: fixed;
  top: 70px;
  width: 450px;
  height: auto;
  z-index: -2;
}

.blog-view-title-container {
  height: 100px;
  width: 300px;
  position: absolute;
  background-color: rgb(47, 46, 46, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  bottom: 20px;
  z-index: 5;
  transform: translateX(-50%);
}

.blog-view-title-container h1 {
  color: white;
  margin: 0;
}

.blog-view-title-container h2 {
  color: rgb(179, 179, 179);
  margin: 0;
  font-size: 20px;
}

@media (min-width: 450px) {
  .video-container {
    height: 275px;
  }

  .blog-view-title-container {
    height: 120px;
    width: 400px;
    bottom: 35px;
  }

  .blog-view-title-container h1 {
    font-size: 30px;
  }

  .blog-view-title-container h2 {
    font-size: 24px;
  }

  video {
    width: 600px;
    top: 50px;
  }
}

@media (min-width: 600px) {
  .video-container {
    height: 250px;
  }

  .blog-view-title-container {
    bottom: 35px;
  }

  video {
    width: 768px;
    top: -40px;
  }
}

@media (min-width: 768px) {
  .video-container {
    height: 500px;
  }

  .blog-view-title-container {
    bottom: 50px;
    height: 150px;
    width: 450px;
  }

  video {
    width: 1000px;
    top: 0;
  }
}

@media (min-width: 1000px) {
  .video-container {
    height: 500px;
  }

  .blog-view-title-container {
    bottom: 70px;
  }

  video {
    width: 1200px;
  }
}

@media (min-width: 1200px) {
  .video-container {
    height: 500px;
  }

  .blog-view-title-container {
    bottom: 100px;
  }

  video {
    width: 1300px;
  }
}
@media (min-width: 1300px) {
  video {
    width: 1500px;
    top: -100px;
  }
}

@media (min-width: 1500px) {
  video {
    width: 1800px;
  }
}

@media (min-width: 1800px) {
  video {
    width: 2300px;
    top: -270px;
  }
}
</style>
