<script setup lang="ts">
// 组合式函数普通写法
// import { ref } from "vue";

// const data = ref(null);
// const error = ref(null);

// fetch("---")
//   .then(res => res.json())
//   .then(json => data.value == json)
//   .then(err => (error.value = err));

// 如果在每个需要获取数据的组件中都要重复这种模式，那就太繁琐了。让我们把它抽取成一个组合式函数：

import { useFetch } from "@/hooks/useSynchronization";

const { data, error } = useFetch(
  "https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images"
);
</script>

<template>
  <div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
      <el-image style="width: 100%; height: 50vh" :src="data" fit="scale-down"
        ><template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div> </template
      ></el-image>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped></style>
