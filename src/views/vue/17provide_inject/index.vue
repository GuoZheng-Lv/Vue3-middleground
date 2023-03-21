<script setup lang='ts'>
import { provide, ref } from 'vue';

/**
 * provide 喝 inject 提供依赖注入,功能类似于 2.x 的provide/inject
 * 
 * 实现跨层级组件(祖孙)间通信
 */

import Child from './Chlid/index.vue'
defineOptions({
  name: 'ProvideInject'
})

const color = ref('red')

provide('color', color)
</script>

<template>
  <div>
    <h1>父组件</h1>
    <p>当前颜色: {{ color }}</p>
    <button @click="color = 'red'">红</button>
    <button @click="color = 'yellow'">黄</button>
    <button @click="color = 'blue'">蓝</button>

    <hr />
    <Child />
  </div>
</template>

<style scoped></style>
