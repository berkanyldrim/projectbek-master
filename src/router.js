
import { createRouter, createWebHistory } from 'vue-router';

const Page1 = () => import('@/components/page1.vue');
const Page2 = () => import('@/components/page2.vue');
const Page3 = () => import('@/components/page3.vue');




const routes= [
    {
      path: '/',
      name: 'Page1',
      component: Page1
    },{
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },

  ];
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});
export default router;
