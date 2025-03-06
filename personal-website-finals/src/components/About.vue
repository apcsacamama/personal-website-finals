<template>
  <section id="about" class="about">
    <h2>About Me</h2>
    <div class="about-content">
      <img src="../assets/profile-picture.jpg" alt="Your Name" class="profile-picture">
      <p>
        Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. 
        I'm passionate about [Your Interests/Specialties]. With [X] years of experience 
        in the field, I've worked on various projects that have honed my skills in 
        [Key Skills].
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  margin-bottom: 40px;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

