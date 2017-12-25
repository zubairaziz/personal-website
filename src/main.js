// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Home from './components/home';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Resume from './components/resume';
import Scroll from './components/scroll';
import vueSmoothScroll from 'vue-smooth-scroll';

import '../static/css/bulma.css';
import '../static/css/shake.css';
import '../static/css/bulma-carousel.css';
import '../static/css/bulma-timeline.css';
import '../static/css/font-awesome.css';
import '../static/js/carousel.js';
import '../static/fonts/fontawesome-webfont.svg';
import '../static/fonts/fontawesome-webfont.ttf';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vueSmoothScroll);

const routes = [
    { path: '/', component: Home },
    { path: '/experience', component: Experience },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/resume', component: Resume },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueRouter,
  template: '<App/>',
  components: {
    App
   }
});
