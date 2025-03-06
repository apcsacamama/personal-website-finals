<template>
  <div class="app">
    <h1>Welcome to my personal website</h1>
    <Header />
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Guestbook />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Guestbook from './components/Guestbook.vue'

console.log("App.vue script executed")
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

main {
  padding: 20px 0;
}

h1 {
  color: var(--primary-color);
}
</style>

