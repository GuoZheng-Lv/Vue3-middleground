<script setup lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from 'vue'

/**
 * shallowReactive与shallowRef
 * 
 * shallowReactive: 只是处理了对象内最外层的响应式(也就是浅层次的响应式)
 * shallowRef: 只处理了value 的响应式, 不进行对象的reactive 处理
 * 
 * 总结: 
 *  reactive与ref实现的是深度响应式,而shallowReactive 与 shallowRef是浅响应式
 * 问题: 什么情况下使用前响应式呢?
 *    --> 一般情况下使用ref和reactive 即可
 *  如果有一个对象数据,结构比较深,但变化时只是外层属性变化 就可以使用 ===> shallowReactive
 *  如果有一个对象数据,后面会产生新的对象来替代 ===> shallowRef 
 */

const m1 = reactive({ a: 1, b: { c: 2 } })
const m2 = shallowReactive({ a: 1, b: { c: 2 } })

const m3 = ref({ a: 1, b: { c: 2 } })
const m4 = shallowRef({ a: 1, b: { c: 2 } })


const update1 = () => m1.b.c += 1;
const update2 = () => m2.b.c += 1;
// 使用过后只能更新浅层次
// const update2 = () => m2.b.a += 1;

const update3 = () => m3.value.a += 1;
// const update4 = () => m4.value.a += 1;
// 只能从新生成新的对象来更新,对象布局要一至
const update4 = () => m4.value = { a: 2, b: { c: 3 } };
</script>

<template>
  <div>
    <h2>App</h2>

    <h3>m1: {{ m1 }}</h3>
    <h3>m2: {{ m2 }}</h3>
    <h3>m3: {{ m3 }}</h3>
    <h3>m4: {{ m4 }}</h3>

    <button @click="update1">更新m1</button>
    <button @click="update2">更新m2</button>
    <button @click="update3">更新m3</button>
    <button @click="update4">更新m4</button>
  </div>
</template>

<style scoped></style>
