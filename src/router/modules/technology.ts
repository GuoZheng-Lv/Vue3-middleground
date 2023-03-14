import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("@/layout/index.vue");

const technologyRouter: RouteConfigsTable = {
  path: "/technology",
  name: "technology",
  component: Layout,
  redirect: "/technology-ref",
  meta: {
    title: "vue技术点",
    rank: 4
  },
  children: [
    {
      path: "/technology-ref",
      name: "technology-ref",
      component: () => import("@/views/1ref/index.vue"),
      meta: {
        title: "REF"
      }
    }, {
      path: "/technology-reactive",
      name: "technology-reactive",
      component: () => import("@/views/2reactive/index.vue"),
      meta: {
        title: "reactive"
      }
    }
  ]
};

export default technologyRouter;
