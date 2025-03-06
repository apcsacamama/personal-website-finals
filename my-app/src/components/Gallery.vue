<template>
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
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  { name: "Me and Angelo the penguin", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/meandangelo.jpg" },
  { name: "Me as a Kid", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/kidme.jpg" },
  { name: "Me and Mico", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/micoandme.jpg" },
  { name: "Shoes", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/shoes.jpg" },
  { name: "Friends", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/friends.jpg" },
  { name: "Blue", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/blue.jpg" },
  { name: "Food", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/food.jpg" },
  { name: "Valo", url: "https://github.com/apcsacamama/personal-website-finals/raw/main/my-app/img/valo.jpg" }
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
</script>

<style scoped>
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