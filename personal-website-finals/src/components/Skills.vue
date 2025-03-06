<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script setup>
const skills = [
  'JavaScript',
  'Vue.js',
  'React',
  'Node.js',
  'HTML5',
  'CSS3',
  'Git',
  'RESTful APIs',
  'Database Design',
  'Responsive Web Design'
]
</script>

<style scoped>
.skills ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style-type: none;
}

.skills li {
  background-color: var(--secondary-color);
  color: var(--text-color-light);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>

