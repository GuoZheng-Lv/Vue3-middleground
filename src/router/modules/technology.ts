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
      path: "/technology-TodoList",
      name: "technology-TodoList",
      component: () => import("@/views/vue/0TodoList/index.vue"),
      meta: {
        title: "TodoList"
      }
    },
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
    }, {
      path: "/technology-shallowReactive_shallowRef",
      name: "technology-shallowReactive_shallowRef",
      component: () => import("@/views/vue/12shallowReactive_shallowRef/index.vue"),
      meta: {
        title: "shallowReactive/shallowRef"
      }
    }, {
      path: "/technology-readonly_shallowReadonly",
      name: "technology-readonly_shallowReadonly",
      component: () => import("@/views/vue/13readonly_shallowReadonly/index.vue"),
      meta: {
        title: "readonly/shallowReadonly"
      }
    }, {
      path: "/technology-toRaw_markRaw",
      name: "technology-toRaw_markRaw",
      component: () => import("@/views/vue/14toRaw_markRaw/index.vue"),
      meta: {
        title: "toRaw/markRaw"
      }
    }, {
      path: "/technology-toRef",
      name: "technology-toRaw_markRaw",
      component: () => import("@/views/vue/15toRef/index.vue"),
      meta: {
        title: "TOREF"
      }
    }, {
      path: "/technology-customRef",
      name: "technology-customRef",
      component: () => import("@/views/vue/16customRef/index.vue"),
      meta: {
        title: "customRef"
      }
    }, {
      path: "/technology-provide_inject",
      name: "technology-provide_inject",
      component: () => import("@/views/vue/17provide_inject/index.vue"),
      meta: {
        title: "provide/inject"
      }
    }, {
      path: "/technology-isApi",
      name: "technology-isApi",
      component: () => import("@/views/vue/18isApi/index.vue"),
      meta: {
        title: "isApi"
      }
    }, {
      path: "/technology-shallowReactive_reactive",
      name: "technology-shallowReactive_reactive",
      component: () => import("@/views/vue/19shallowReactive_reactive/index.vue"),
      meta: {
        title: "shallowReactive/reactive"
      }
    }, {
      path: "/technology-shallowRef_ref",
      name: "technology-shallowReactive_reactive",
      component: () => import("@/views/vue/20shallowRef_ref/index.vue"),
      meta: {
        title: "shallowRef/ref"
      }
    }, {
      path: "/technology-shallowReadonly_readonly",
      name: "technology-shallowReadonly_readonly",
      component: () => import("@/views/vue/21shallowReadonly_readonly/index.vue"),
      meta: {
        title: "shallowReadonly/readonly"
      }
    }, {
      path: "/technology-Fragment",
      name: "technology-Fragment",
      component: () => import("@/views/vue/23Fragment/index.vue"),
      meta: {
        title: "Fragment"
      }
    }, {
      path: "/technology-Teleport",
      name: "technology-Teleport",
      component: () => import("@/views/vue/24Teleport/index.vue"),
      meta: {
        title: "Teleport"
      }
    }, {
      path: "/technology-Suspense",
      name: "technology-Suspense",
      component: () => import("@/views/vue/25Suspense/index.vue"),
      meta: {
        title: "Suspense"
      }
    }, {
      path: "/technology-globalApi",
      name: "technology-globalApi",
      component: () => import("@/views/vue/26globalApi/index.vue"),
      meta: {
        title: "globalApi"
      }
    }, {
      path: "/technology-transferApi",
      name: "technology-transferApi",
      component: () => import("@/views/vue/27transferApi/index.vue"),
      meta: {
        title: "transferApi"
      }
    }, {
      path: "/technology-TemplateSyntax",
      name: "technology-TemplateSyntax",
      component: () => import("@/views/vue/28TemplateSyntax/index.vue"),
      meta: {
        title: "TemplateSyntax"
      }
    }

  ]
};

export default technologyRouter;
