import { createApp } from "vue"
import App from "./App.vue"
import "./styles/main.css"
import "./styles/variables.css"
import "./styles/responsive.css"

const app = createApp(App)

app.mount("#app")

// Add this line for debugging
console.log("Vue app mounted")

