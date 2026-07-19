import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import VoteView from '@/views/VoteView.vue'
import VoteSuccessView from '@/views/VoteSuccessView.vue'
import ResultsView from '@/views/ResultsView.vue'
import SubmitView from '@/views/SubmitView.vue'
import SubmissionSuccessView from '@/views/SubmissionSuccessView.vue'
import ParticipateView from '@/views/ParticipateView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/participate',
    name: 'participate',
    component: ParticipateView,
  },
  {
    path: '/submit',
    name: 'submit',
    component: SubmitView,
  },
  {
    path: '/submission-success',
    name: 'submission-success',
    component: SubmissionSuccessView,
  },
  {
    path: '/vote',
    name: 'vote',
    component: VoteView,
  },
  {
    path: '/success',
    name: 'vote-success',
    component: VoteSuccessView,
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsView,
  },
],
})

export default router