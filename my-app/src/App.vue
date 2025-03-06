<template>
  <div class="container">
    <header class="header">
      <h1>Welcome To Shan's Space! 🌟</h1>
    </header>

    <nav class="nav">
      <a v-for="link in navLinks" :key="link.text" :href="link.href" class="nav-link">{{ link.text }}</a>
    </nav>

    <main class="main">
      <section class="main-content">
        <div v-for="section in sections" :key="section.id" :id="section.id" class="section">
          <h2>{{ section.title }}</h2>
          <p v-for="(text, index) in section.content" :key="index">{{ text }}</p>
        </div>

        <!-- Photo Gallery Section -->
        <div class="gallery">
          <h2>📸 Snapshot of My Life</h2>
          <div class="gallery-container">
            <div v-for="(image, index) in images" :key="index" class="image-container">
              <img :src="image.url" :alt="image.name" @click="openLightbox(index)" class="clickable-image"/>
              <div class="image-name">{{ image.name }}</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Lightbox (Full-Screen Image View) -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="prev" @click.stop="prevImage">◀</button>
        <img :src="images[currentImageIndex].url" :alt="images[currentImageIndex].name" />
        <button class="next" @click.stop="nextImage">▶</button>
        <button class="close" @click="closeLightbox">✖</button>
      </div>
    </div>

    <!-- Comments Section -->
    <div id="comments-section" class="comments-section">
      <h2>💬 Share Your Thoughts</h2>
      <form @submit.prevent="addComment" class="comment-form">
        <input type="text" id="name" v-model="newComment.name" required placeholder="Your Name" />
        <textarea id="message" v-model="newComment.message" required placeholder="Leave a comment..."></textarea>
        <button type="submit" class="button">Post Comment</button>
      </form>

      <div class="comments-list">
        <h3>What Others Are Saying</h3>
        <div v-if="comments.length === 0" class="no-comments">Be the first to leave a comment! 😊</div>
        <div v-for="(comment, index) in comments" :key="index" class="comment">
          <h4>{{ comment.name }}</h4>
          <p>{{ comment.message }}</p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; 2025 Shanteiy A. Camama | Asia Pacific College</p>
      <div class="social-links">
        <a href="https://github.com/apcsacamama" target="_blank" rel="noopener noreferrer" class="social-button github">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shanteiy-camama-238643218/" target="_blank" rel="noopener noreferrer" class="social-button linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const navLinks = ref([
      { text: "About Me", href: "#about" },
      { text: "Education", href: "#education" },
      { text: "Course", href: "#course" },
      { text: "IT Experience", href: "#experience" },
      { text: "Hobbies", href: "#hobbies" },
      { text: "Goals", href: "#goals" },
      { text: "My Socials", href: "https://frankie-socmeds.carrd.co/" }
    ]);

    const sections = ref([
      { id: "about", title: "👋 Hey there, I'm Shan!", content: ["Welcome to my digital corner! I'm Shanteiy A. Camama, but feel free to call me Shan. Currently cruising through my 2nd year of college, I'm on an exciting journey of self-discovery and learning. Stick around to get to know me better!"] },
      { id: "education", title: "🎓 My Academic Adventures", content: ["2022-2023: Snagged 1st Place in the MathemArtists Art Making Competition (who said math and art don't mix? jk)", "2023-2024: One of the people who got into the dean's lister on my 1st-year of college"] },
      { id: "course", title: "💻 My Tech Playground", content: ["I'm diving deep into the world of 1s and 0s with a Bachelor of Science in Computer Science, specializing in Software Systems. It's like being a digital architect, and I'm loving every bit of it! (Somehow..)"] },
      { id: "experience", title: "🚀 My Tech Toolkit", content: ["Front-end wizardry: Turning designs into interactive realities", "Back-end sorcery: Making sure everything runs smoothly behind the scenes", "Database juggling: Keeping all the important info organized and accessible"] },
      { id: "hobbies", title: "🌈 What Makes Me, Me", content: ["Getting lost in the colorful world of manhwas and manga", "Strumming away on my ukulele and tickling the ivories on my keyboard", "Spiking and serving on the volleyball court", "Exploring new places and cultures through travel"] },
      { id: "goals", title: "✨ Dreaming Big", content: ["My ultimate goal? To follow in my sister's footsteps and become a software developer. But that's not all - I'm also dreaming of jet-setting around the globe once I've got that financial stability locked down."] }
    ]);

    const images = ref([
      { name: "Me and Angelo the penguin", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/meandangelo.jpg" },
      { name: "Me as a Kid", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/kidme.jpg" },
      { name: "Me and Mico", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/micoandme.jpg" },
      { name: "Shoes", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/shoes.jpg" },
      { name: "Friends", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/friends.jpg" }
    ]);

    const lightboxOpen = ref(false);
    const currentImageIndex = ref(0);
    const comments = ref([]);
    const newComment = ref({ name: "", message: "" });

    const openLightbox = (index) => {
      currentImageIndex.value = index;
      lightboxOpen.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightboxOpen.value = false;
      document.body.style.overflow = '';
    };

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
    };

    const prevImage = () => {
      currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
    };

    const addComment = () => {
      if (newComment.value.name && newComment.value.message) {
        comments.value.push({ name: newComment.value.name, message: newComment.value.message });
        newComment.value = { name: "", message: "" };
      }
    };

    return {
      navLinks,
      sections,
      images,
      lightboxOpen,
      currentImageIndex,
      comments,
      newComment,
      openLightbox,
      closeLightbox,
      nextImage,
      prevImage,
      addComment
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Pacifico&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #e6f3ff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background-color: #bee7e9;
  text-align: center;
  padding: 40px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header h1 {
  margin: 0;
  font-size: 3em;
  color: #333;
  font-family: 'Pacifico', cursive;
}

.nav {
  background-color: #9ad3de;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

.nav-link:hover {
  background-color: #7fc7d9;
}

.main-content {
  background-color: #d4f1f4;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #9ad3de;
  padding-bottom: 10px;
  font-family: 'Pacifico', cursive;
  font-size: 2.2em;
}

.gallery {
  text-align: center;
  padding: 20px;
  background-color: #e8f8f5;
  border-radius: 8px;
  margin-top: 20px;
}

.gallery h2 {
  font-family: 'Pacifico', cursive;
  font-size: 2.2em;
  color: #2c3e50;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.clickable-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.image-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-container:hover .clickable-image {
  transform: scale(1.05);
  filter: brightness(70%);
}

.image-container:hover .image-name {
  transform: translateY(0);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
}

.lightbox img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox button {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lightbox button:hover {
  background: rgba(255, 255, 255, 1);
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev { left: 20px; }
.next { right: 20px; }

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
}

.comments-section {
  background-color: #f0f8ff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.comments-section h2 {
  font-family: 'Pacifico', cursive;
  font-size: 2.2em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.comment-form input,
.comment-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #9ad3de;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.comment-form input:focus,
.comment-form textarea:focus {
  outline: none;
  border-color: #7fc7d9;
}

.comment-form textarea {
  height: 120px;
  resize: vertical;
}

.button {
  background-color: #9ad3de;
  color: #333;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

.button:hover {
  background-color: #7fc7d9;
}

.comments-list {
  margin-top: 30px;
}

.comments-list h3 {
  font-family: 'Pacifico', cursive;
  font-size: 1.8em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.no-comments {
  text-align: center;
  font-style: italic;
  color: #666;
}

.comment {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.comment h4 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.2em;
}

.footer {
  background-color: #bee7e9;
  color: #333;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.social-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.github { background-color: #333; }
.linkedin { background-color: #0077B5; }
.twitter { background-color: #1DA1F2; }

@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
  }

  .nav-link {
    margin: 5px;
  }

  .gallery-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .header h1 {
    font-size: 2.5em;
  }

  .section h2,
  .gallery h2,
  .comments-section h2 {
    font-size: 1.8em;
  }
}
</style>