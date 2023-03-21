<template>
  <Suspense>
    <template v-slot:default>
      <!-- <AsyncComp /> -->
      <AsyncAddress />
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
/* 
异步组件 + Suspense组件
*/
// import AsyncComp from './AsyncComp.vue'
import { defineAsyncComponent } from "vue";
import AsyncAddress from "./AsyncAddress/index.vue";
const AsyncComp = defineAsyncComponent(() => import("./AsyncComp/index.vue"));
</script>