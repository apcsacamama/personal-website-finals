<template>
  <div class="container">
    <header class="header">
      <h1>My Personal Profile Webpage</h1>
    </header>

    <nav class="nav">
      <a v-for="link in navLinks" :key="link.text" :href="link.href">{{ link.text }}</a>
    </nav>

    <main class="main">
      <section class="main-content">
        <div v-for="section in sections" :key="section.id" :id="section.id" class="section">
          <h2>{{ section.title }}</h2>
          <p v-for="(text, index) in section.content" :key="index">{{ text }}</p>
        </div>

        <div id="comments-section" class="comments-section">
          <h2>Leave a Comment</h2>
          <form @submit.prevent="addComment">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="newComment.name" required />

            <label for="message">Message:</label>
            <textarea id="message" v-model="newComment.message" required></textarea>

            <button type="submit" class="button">Submit</button>
          </form>

          <div class="comments-list">
            <h2>Comments</h2>
            <div v-if="comments.length === 0">No comments yet. Be the first to comment!</div>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
              <h3>{{ comment.name }}</h3>
              <p>{{ comment.message }}</p>
            </div>
          </div>
        </div>
      </section>

       <div class="gallery">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.url"
      :alt="image.name"
      @click="openLightbox(index)"
    />
  </div>

  <div v-if="lightboxOpen" class="lightbox active" @click="closeLightbox">
    <div class="lightbox-controls">
      <button @click.stop="prevImage">◀</button>
      <img :src="images[currentImageIndex].url" :alt="images[currentImageIndex].name" />
      <button @click.stop="nextImage">▶</button>
    </div>
  </div>

    <footer class="footer">
      <p>&copy; 2025 Shanteiy A. Camama | Asia Pacific College</p>
    </footer>
  </div>


</template>

<script scoped>
export default {
  data() {
    return {
      navLinks: [
        { text: "About Me", href: "#about" },
        { text: "Education", href: "#education" },
        { text: "Course", href: "#course" },
        { text: "IT Experience", href: "#experience" },
        { text: "Hobbies", href: "#hobbies" },
        { text: "Goals", href: "#goals" },
        { text: "Credits", href: "credits.html" },
        { text: "My Socials", href: "https://frankie-socmeds.carrd.co/" }
      ],
      sections: [
        { id: "about", title: "About Me", content: ["Hello! My name is Shanteiy A. Camama, but you can also call me Shan. I am currently in my 2nd year of college, and here are some things about me."] },
        { id: "education", title: "Education / Achievements", content: ["2022-2023: 1st Place in MathemArtists Art Making Competition, Grade 12 with honors", "2023-2024: 1st-year Honor student"] },
        { id: "course", title: "Course", content: ["Bachelor of Science in Computer Science Specializing in Software Systems."] },
        { id: "experience", title: "IT Experience", content: ["Front-end and Back-end programming", "Database management"] },
        { id: "hobbies", title: "Hobbies & Interests", content: ["Reading manhwas and manga", "Playing instruments like the ukulele and keyboard", "Volleyball", "Traveling"] },
        { id: "goals", title: "Goals in Life / Dream", content: ["My dream is to become a successful software developer like my sister and travel around the world once I'm financially stable."] }
      ],
      newComment: { name: "", message: "" },
      comments: [],
      import { ref } from "vue";

const images = ref([
  { name: "Me and Angelo the penguin", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/meandangelo.jpg" },
  { name: "Me as a Kid", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/kidme.jpg" },
  { name: "Me and Mico", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/micoandme.jpg" },
  { name: "Shoes", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/shoes.jpg" },
  { name: "Friends", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/friends.jpg" }
]);

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

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
    };
  },
  methods: {
    addComment() {
      if (this.newComment.name && this.newComment.message) {
        this.comments.push({ name: this.newComment.name, message: this.newComment.message });
        this.newComment.name = "";
        this.newComment.message = "";
      }
    }
  }
};
</script>

<style scoped>
/* Include your CSS styles here */
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.header {
  background-color: #bee7e9;
  text-align: center;
  padding: 15px;
}

.nav {
  background-color: #9ad3de;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.nav a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
}

.main {
  display: flex;
}

.main-content {
  flex: 2;
  padding: 20px;
  background-color: #d4f1f4;
}

.sidebar {
  flex: 1;
  padding: 20px;
  background-color: #b8e1ed;
}

.footer {
  background-color: #a7d5e8;
  text-align: center;
  padding: 15px;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.gallery img {
  width: 100px; /* Adjust size */
  height: auto;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s;
}

.gallery img:hover {
  transform: scale(1.1);
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
}

.lightbox img {
  max-width: 80%;
  max-height: 80vh;
  border-radius: 10px;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lightbox button {
  background: white;
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

.lightbox button:hover {
  background: #ddd;
}
</style>
