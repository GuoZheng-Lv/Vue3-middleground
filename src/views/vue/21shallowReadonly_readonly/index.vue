<script setup lang='ts'>
import { readonly, shallowReadonly } from './index'
/* 测试自定义readonly */
const objReadOnly = readonly({
  a: {
    b: 1,
  }
})
/* 测试自定义shallowReadonly */
const objReadOnly2 = shallowReadonly({
  a: {
    b: 1,
  },
});
setTimeout(() => {
  objReadOnly.a = 1;
  objReadOnly.a.b = 2;
  objReadOnly2.a = 1;
  objReadOnly2.a.b = 2;

  delete objReadOnly.a
}, 2000);
</script>

<template>
  <div>
    <div>{{ objReadOnly }}</div>
    <div>{{ objReadOnly2 }}</div>
  </div>
</template>

<style scoped></style>
