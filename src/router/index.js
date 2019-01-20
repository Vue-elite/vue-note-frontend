import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SignIn from '@/components/SignIn';
import Register from '@/components/Register';
import Boards from '@/components/Boards';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/sign-in',
      name: 'Sign In',
      props: { pageName: 'Sign In' },
      component: SignIn,
    },
    {
      path: '/register',
      name: 'Register',
      props: { pageName: 'Register' },
      component: Register,
    },
    {
      path: '/boards',
      name: 'Boards',
      props: { pageName: 'Boards' },
      component: Boards,
    },
  ],
});
