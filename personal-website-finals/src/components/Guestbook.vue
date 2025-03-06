<template>
  <section id="guestbook" class="guestbook">
    <h2>Guestbook</h2>
    <form @submit.prevent="submitEntry">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newEntry.name" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="newEntry.message" required></textarea>
      </div>
      <button type="submit">Submit Entry</button>
    </form>
    <div class="entries">
      <div v-for="entry in entries" :key="entry.id" class="entry">
        <h3>{{ entry.name }}</h3>
        <p>{{ entry.message }}</p>
        <small>{{ new Date(entry.created_at).toLocaleString() }}</small>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const entries = ref([])
const newEntry = ref({ name: '', message: '' })

const fetchEntries = async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) console.error('Error fetching entries:', error)
  else entries.value = data
}

const submitEntry = async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .insert([
      { name: newEntry.value.name, message: newEntry.value.message }
    ])
  
  if (error) console.error('Error submitting entry:', error)
  else {
    newEntry.value = { name: '', message: '' }
    fetchEntries()
  }
}

onMounted(() => {
  fetchEntries()
})
</script>

<style scoped>
.guestbook form {
  max-width: 500px;
  margin: 0 auto 40px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
}

textarea {
  height: 100px;
}

button {
  background-color: var(--primary-color);
  color: var(--text-color-light);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--primary-color-dark);
}

.entries {
  display: grid;
  gap: 20px;
}

.entry {
  background-color: var(--bg-color-secondary);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.entry h3 {
  margin-top: 0;
}

.entry small {
  color: var(--text-color-muted);
}
</style>

