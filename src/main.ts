import { createApp } from 'vue'

import './assets/css/main.css'
import './assets/fontello/css/fontello.css'

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");