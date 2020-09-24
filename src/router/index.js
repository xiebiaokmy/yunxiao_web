import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  redirect: "/Spread",
  children: [{
      path: "/Index",
      name: "Index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/index.vue")
    },
    {
      path: "/Spread",
      name: "Spread",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/productsAndservices/spread.vue"
        )
    },
    {
      path: "/Marketing",
      name: "Marketing",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/productsAndservices/marketing.vue"
        )
    },
    {
      path: "/Design",
      name: "Design",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/productsAndservices/design.vue"
        )
    },
    {
      path: "/Offline",
      name: "Offline",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/productsAndservices/offline.vue"
        )
    },
    {
      path: "/Monitor",
      name: "Monitor",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/productsAndservices/monitor.vue"
        )
    },
    {
      path: "/Case",
      name: "Case",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/case.vue"
        )
    },
    {
      path: "/About",
      name: "About",
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/about.vue"
        )
    },
    {
      path: "/Contact",
      name: "Contact",
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "../views/contact.vue"
        )
    },
  ]
}];
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;