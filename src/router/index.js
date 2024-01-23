import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import FinishedTasks from '../components/FinishedTasks.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/finished-tasks', component: FinishedTasks },
  //dinamičko usmjeravanje s 404 stranicom ("catch all")
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
