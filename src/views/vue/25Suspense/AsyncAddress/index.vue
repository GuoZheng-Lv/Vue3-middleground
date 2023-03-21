<template>
  <h2>{{ data }}</h2>
</template>

<script lang="ts">
// async setup() 必须与 Suspense 内置组件组合使用，Suspense 目前还是处于实验阶段的特性，会在将来的版本中稳定。
//<script setup> 中可以使用顶层 await。结果代码会被编译成 async setup()：
import axios from "axios";
export default {
  async setup() {
    const result = await axios.get("/data/address.json");
    return {
      data: result.data,
    };
  },
};
</script>