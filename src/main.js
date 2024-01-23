import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './components/NotFound.vue';
import FinishedTasks from './components/FinishedTasks.vue';
import HomePage from './views/HomePage.vue';

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/finished-tasks', component: FinishedTasks },
    { path: '/:catchAll(.*)', component: NotFound },
  ],
});

const app = createApp(App);

app.use(pinia);

app.use(router);

app.mount('#app');
