<script setup lang='ts'>
import { shallowRef, ref } from './index'
/* 测试自定义shallowRef */
const ref3 = shallowRef({
  a: "abc",
});

setTimeout(() => {
  ref3.value = "xxx";
  // ref3.value.a = "yyy"; // 数据不更新
}, 2000);

/* 测试自定义ref */
const ref1 = ref(0);
const ref2 = ref({
  a: "abc",
  b: [{ x: 1 }],
  c: { x: [11] },
});
setTimeout(() => {
  ref1.value++;
  ref2.value.b[0].x++;
  console.log(ref1, ref2);
}, 2000);

</script>

<template>
  <div>
    <div>{{ ref3 }}</div>
    <div>{{ ref1 }}</div>
    <div>{{ ref2 }}</div>
  </div>
</template>

<style scoped></style>
