<script setup lang='ts'>
/**
 * customRef :
 *  创建一个自定义的 ref, 并对其依赖项跟踪喝更新触发进行显式控制
 * 
 * 需求:
 *  使用 customRef 实现 debounce 的实例
 */
import { useDebouncedRef } from '@/hooks/useDebouncedRef'
const keyword = useDebouncedRef("", 500);
console.log(keyword);

</script>

<template>
  <div>
    <h2>App</h2>
    <input v-model="keyword" placeholder="搜索关键字" />
    <p>{{ keyword }}</p>
  </div>
</template>

<style scoped></style>
