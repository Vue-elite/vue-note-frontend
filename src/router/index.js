import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/_base-HelloWorld';
import SignIn from '@/components/_base-SignIn';
import Register from '@/components/_base-Register';
import Boards from '@/components/_base-Boards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: HelloWorld,
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
