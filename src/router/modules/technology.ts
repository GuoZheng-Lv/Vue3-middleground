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
      component: () => import("@/views/vue/1ref/index.vue"),
      meta: {
        title: "REF"
      }
    }, {
      path: "/technology-reactive",
      name: "technology-reactive",
      component: () => import("@/views/vue/2reactive/index.vue"),
      meta: {
        title: "REACTIVE"
      }
    }, {
      path: "/technology-proxy",
      name: "technology-proxy",
      component: () => import("@/views/vue/3proxy/index.vue"),
      meta: {
        title: "PROXY"
      }
    }, {
      path: "/technology-setup",
      name: "technology-setup",
      component: () => import("@/views/vue/4setup/index.vue"),
      meta: {
        title: "SETUP"
      }
    }, {
      path: "/technology-reactive_ref",
      name: "technology-reactive_ref",
      component: () => import("@/views/vue/5reactive_ref/index.vue"),
      meta: {
        title: "reactive/ref区别"
      }
    }, {
      path: "/technology-monitor",
      name: "technology-monitor",
      component: () => import("@/views/vue/6monitor/index.vue"),
      meta: {
        title: "monitor属性"
      }
    }, {
      path: "/technology-onLifecycle",
      name: "technology-onLifecycle",
      component: () => import("@/views/vue/7onLifecycle/index.vue"),
      meta: {
        title: "生命周期"
      }
    }, {
      path: "/technology-hook",
      name: "technology-hook",
      component: () => import("@/views/vue/8hook/index.vue"),
      meta: {
        title: "HOOK函数"
      }
    }, {
      path: "/technology-fetch",
      name: "technology-fetch",
      component: () => import("@/views/vue/9fetch/index.vue"),
      meta: {
        title: "FETCH异步请求"
      }
    }, {
      path: "/technology-toRefs",
      name: "technology-toRefs",
      component: () => import("@/views/vue/10ToRefs/index.vue"),
      meta: {
        title: "TOREFS"
      }
    }, {
      path: "/technology-refDom",
      name: "technology-refDom",
      component: () => import("@/views/vue/11refDom/index.vue"),
      meta: {
        title: "REFDOM"
      }
    }
  ]
};

export default technologyRouter;
