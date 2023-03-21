<script setup lang='ts'>
import { shallowReactive, reactive } from './index'

/* 测试自定义shallowReactive */
const proxy = shallowReactive({
  a: {
    b: 3,
  },
});
console.log('proxy前 :>> ', proxy);
setTimeout(() => {
  proxy.a = { b: 4 }; // 劫持到了
  proxy.a.b = 5; // 没有劫持到
  console.log('proxy后 :>> ', proxy);
}, 2000);
/* 测试自定义reactive */
const obj = {
  a: "abc",
  b: [{ x: 1 }],
  c: { x: [11] },
};

const reactiveProxy = reactive(obj);
console.log('reactiveProxy前 :>> ', reactiveProxy);

setTimeout(() => {
  reactiveProxy.b[0].x += 1;
  reactiveProxy.c.x[0] += 1;
  console.log('reactiveProxy后 :>> ', reactiveProxy);
}, 2000);

</script>

<template>
  <div>
    <div>{{ proxy }}</div>
    <div>{{ reactiveProxy }}</div>
  </div>
</template>

<style scoped></style>
