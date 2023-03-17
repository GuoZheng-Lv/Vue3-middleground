<script setup lang="ts">
import { reactive, toRefs } from "vue";

/**
 * @param {ToRefs}
 * 将响应式对象中所有属性包装为ref对象,并返回包含这些ref对象的普通对象
 * 应用: 当从合成函数返回响应式对象时, toRefs 非常有用,这样消费组件就可以在不丢失响应式的情况下返回的对象进行分解使用
 * 问题: @param {reactive} 对象取出的所有属性都是非响应式的
 * 解决: @returns 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转为响应式的 ref 属性
 **/

const status: object = reactive({
  foo: "a",
  bar: "b"
});
</script>

<template>
  <div>
    <h2>App</h2>
    <h3>foo: {{ foo }}</h3>
    <h3>bar: {{ bar }}</h3>
    <h3>foo2: {{ foo2 }}</h3>
    <h3>bar2: {{ bar2 }}</h3>
  </div>
</template>

<style scoped></style>
