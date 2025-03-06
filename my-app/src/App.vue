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
            <p>Hello! My name is Shanteiy A. Camama, but you can also call me Shan...</p>
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

          <div class="comments-section">
            <h2>Leave a Comment</h2>
            <form @submit.prevent="addComment">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="newComment.name" required>

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

        <aside class="sidebar">
          <h2>Picture Gallery</h2>
          <p>Here are some pictures that represent me:</p>
          <div class="gallery">
            <div v-for="(image, index) in images" :key="index" class="gallery-item">
              <img :src="image" alt="Gallery Image" />
            </div>
          </div>
        </aside>
      </main>

      <footer class="footer">
        <p>&copy; 2025 Shanteiy A. Camama | Asia Pacific College</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: {
        name: '',
        message: ''
      },
      comments: [],
      images: [
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/meandangelo.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/kidme.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/micoandme.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/shoes.jpg",
        "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/friends.jpg"
      ]
    };
  },
  methods: {
    addComment() {
      if (this.newComment.name && this.newComment.message) {
        this.comments.push({ ...this.newComment });
        this.newComment.name = '';
        this.newComment.message = '';
      }
    },
    redirectToSocials() {
      window.location.href = "https://frankie-socmeds.carrd.co/";
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
</style>