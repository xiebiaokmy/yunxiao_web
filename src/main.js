import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */ );
Vue.config.productionTip = false;
import {
  Carousel,
  CarouselItem,
  Select,
  Option,
  Input,
  Pagination,
} from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Pagination);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");