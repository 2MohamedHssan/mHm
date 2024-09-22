import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

createApp(App).use(store).use(router).mount('#app');

AOS.init({
  duration: 1200,
  once: true,
  offset: 500,
});
