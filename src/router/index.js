import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProfessorsIndex from "../views/ProfessorsIndex.vue";
import ProfessorsShow from "../views/ProfessorsShow.vue";
import ProfessorsNew from "../views/ProfessorsNew.vue";
import ProfessorsEdit from "../views/ProfessorsEdit.vue";
import ReviewsNew from "../views/ReviewsNew.vue";
import ReviewsEdit from "../views/ReviewsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/professors",
    name: "professors-index",
    component: ProfessorsIndex,
  },
  {
    path: "/professors/:id",
    name: "professors-show",
    component: ProfessorsShow,
  },
  {
    path: "/professor/new",
    name: "professors-new",
    component: ProfessorsNew,
  },
  {
    path: "/professors/:id/edit",
    name: "professors-edit",
    component: ProfessorsEdit,
  },
  {
    path: "/professors/:id/review-new",
    name: "reviews-new",
    component: ReviewsNew,
  },
  {
    path: "/reviews/:id/edit",
    name: "reviews-edit",
    component: ReviewsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
