<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// // 使用组合式APi完成鼠标跟踪
// const x = ref(0);
// const y = ref(0);
// const update = event => {
//   x.value = event.pageX;
//   y.value = event.pageY;
// };
// onMounted(() => window.addEventListener("mousemove", update)); //挂载完成触发
// onUnmounted(() => window.addEventListener("mousemove", update)); // 页面销毁触发

// hook函数
import { useMouse } from "@/hooks/useMousePosition";
const { x, y } = useMouse();
</script>

<template>
  <div>
    <div>hook函数</div>
    <div>鼠标移动的位置 : X: {{ x }} Y:{{ y }}</div>
  </div>
</template>

<style scoped></style>
