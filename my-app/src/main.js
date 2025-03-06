import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Comments from './components/Comments.vue'
import Footer from './components/Footer.vue'
import Gallery from './components/Gallery.vue'
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'
import Navigation from './components/Navigation.vue'

const app = createApp(App)
app.component('comments', Comments)
app.component('footer', Footer)
app.component('gallery', Gallery)
app.component('header', Header)
app.component('maincontent', MainContent)
app.component('navigation', Navigation)

app.mount('#app')
