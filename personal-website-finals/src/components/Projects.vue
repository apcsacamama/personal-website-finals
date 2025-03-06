<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="project-list">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    link: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    link: 'https://github.com/yourusername/project3'
  }
]
</script>

<style scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: var(--bg-color-secondary);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin-top: 0;
}

.project-card a {
  display: inline-block;
  margin-top: 10px;
  color: var(--primary-color);
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}
</style>

