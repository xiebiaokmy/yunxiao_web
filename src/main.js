import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import {
  Carousel,
  CarouselItem,
  Select,
  Option,
  Input,
} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')