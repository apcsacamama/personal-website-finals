<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <h1>My Personal Profile Webpage</h1>
      </header>

      <nav class="nav">
        <a href="#about">About Me</a>
        <a href="#education">Education</a>
        <a href="#course">Course</a>
        <a href="#experience">IT Experience</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#goals">Goals</a>
        <a href="credits.html">Credits</a>
        <a href="https://frankie-socmeds.carrd.co/" @click.prevent="redirectToSocials">My Socials</a>
      </nav>

      <main class="main">
        <section class="main-content">
          <div id="about" class="about">
            <h2>About Me</h2>
            <p>Hello! My name is Shanteiy A. Camama, but you can also call me Shan. I am currently in my 2nd year of college, and here are some of the things about me.</p>
          </div>

          <div id="education" class="education">
            <h2>Education / Achievements</h2>
            <p>2022-2023: 1st Place in MathemArtists Art Making Competition...</p>
          </div>

          <div id="course" class="course">
            <h2>Course</h2>
            <p>Bachelor of Science in Computer Science Specializing in Software Systems.</p>
          </div>

          <div id="experience" class="it-experience">
            <h2>IT Experience</h2>
            <p>I have worked on various IT projects, including Front-end and Back-end programming...</p>
          </div>

          <div id="hobbies" class="hobbies">
            <h2>Hobbies & Interests</h2>
            <p>Reading manhwas and manga, Playing instruments like the ukulele and keyboard...</p>
          </div>

          <div id="goals" class="goals">
            <h2>Goals in Life / Dream</h2>
            <p>My dream is to become a successful software developer...</p>
          </div>
        </section>

        <aside class="sidebar">
          <h2>Picture Gallery</h2>
          <p>Click an image to enlarge:</p>
          <div class="gallery">
            <div v-for="(image, index) in images" :key="index" class="gallery-item" @click="openLightbox(index)">
              <img :src="image" alt="Gallery Image" />
            </div>
          </div>
        </aside>
      </main>

      <footer class="footer">
        <p>&copy; 2025 Shanteiy A. Camama | Asia Pacific College</p>
      </footer>

      <!-- Lightbox Overlay -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-btn prev" @click.stop="prevImage">❮</button>
        <img :src="images[currentImageIndex]" class="lightbox-image" @click.stop />
        <button class="lightbox-btn next" @click.stop="nextImage">❯</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/meandangelo.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/kidme.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/micoandme.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/shoes.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/friends.jpg"
      ],
      lightboxOpen: false,
      currentImageIndex: 0
    };
  },
  methods: {
    redirectToSocials() {
      window.location.href = "https://frankie-socmeds.carrd.co/";
    },
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = '';
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.header {
  background-color: #BEE7E9;
  padding: 15px;
}

.nav {
  background-color: #9AD3DE;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2C3E50;
}

.main {
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
}

.main-content {
  flex: 2;
  background: #D4F1F4;
  padding: 20px;
}

.sidebar {
  flex: 1;
  background: #B8E1ED;
  padding: 20px;
}

.footer {
  background: #A7D5E8;
  padding: 15px;
  width: 100%;
  text-align: center;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-image {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
}

.lightbox-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}

.prev { left: 20px; }
.next { right: 20px; }
</style>
