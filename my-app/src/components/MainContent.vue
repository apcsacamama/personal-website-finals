<template>
  <main class="main">
    <section class="main-content">
      <div id="about" class="about">
        <h2>About Me</h2>
        <p>Hello! My name is Shanteiy A. Camama, but you can also call me Shan. I am currently in my 2nd year of college.</p>
      </div>

      <div id="education" class="education">
        <h2>Education / Achievements</h2>
        <p>2022-2023: 1st Place in MathemArtists Art Making Competition, Grade 12 with honors</p>
        <p>2023-2024: 1st-year Honor student</p>
      </div>

      <div id="course" class="course">
        <h2>Course</h2>
        <p>Bachelor of Science in Computer Science Specializing in Software Systems.</p>
      </div>

      <div id="experience" class="it-experience">
        <h2>IT Experience</h2>
        <p>I have worked on various IT projects, including:</p>
        <ul>
          <li>Front-end and Back-end programming</li>
          <li>Database management</li>
        </ul>
      </div>

      <div id="hobbies" class="hobbies">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>Reading manhwas and manga</li>
          <li>Playing instruments like the ukulele and keyboard</li>
          <li>Volleyball</li>
          <li>Traveling</li>
        </ul>
      </div>

      <div id="goals" class="goals">
        <h2>Goals in Life / Dream</h2>
        <p>My dream is to become a successful software developer and travel around the world once I'm financially stable.</p>
        <GalleryComponent />
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.main-content {
  flex: 2;
  background-color: #d4f1f4;
  padding: 20px;
  border-left: 3px solid #bee7e9;
  border-right: 3px solid #bee7e9;
}
.main-content h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}
</style>
