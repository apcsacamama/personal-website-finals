<script setup>
import { ref } from "vue";

const comments = ref([]);
const newComment = ref("");

const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({ text: newComment.value });
    newComment.value = "";
  }
};
</script>

<template>
  <section class="comments-section">
    <h2>Comments</h2>
    <form @submit.prevent="addComment">
      <input v-model="newComment" placeholder="Write a comment..." />
      <button type="submit" class="button">Post</button>
    </form>
    
    <div class="comments-list">
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comments-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #EFF8FC;
  border-radius: 10px;
}

.comment {
  background-color: #D6EAF8;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>