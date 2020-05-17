import Vue from "vue";
import VueRouter from "vue-router";
/* eslint-disable no-unused-vars */
import events from "../views/events.vue";
import eventDetail from "../views/eventDetail.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/events"
  },
  {
    path: "/events",
    name: "events",
    component: events
  },
  {
    path: "/eventDetail/:id",
    name: "eventDetail",
    component: eventDetail,
    props: r => ({
      id: parseInt(r.params.id)
    })
  },
  {
    path: "/payment",
    name: "payment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/payment.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;