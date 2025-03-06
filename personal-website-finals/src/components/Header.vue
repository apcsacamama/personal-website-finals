<template>
  <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#guestbook">Guestbook</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  padding: 20px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: var(--text-color-light);
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>

