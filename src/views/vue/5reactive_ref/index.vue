<script setup lang="ts">
import { reactive, ref } from "vue";
/**
 * reactive 与 ref-细节
 *
 * reactive/ref 是vue3的 composition API中 2 个最重要的响应式API
 * ref用来处理基本类型数据,reactive 用来处理对象(递归深度响应式)
 * 如果用 ref 对象/数组,内部会自动将对象/数组转为 reactive 的代理对象
 * ref 内部: 通过给 value 属性添加 getter/setter 来实现对数据的劫持
 * reactive 内部: 通过使用Proxy 来实现对对象内部所有数据的劫持,并通过 Reflect 操作对象内部数据
 * ref 的数据操作: 在js 中要 .value,在模板中不需要(内部解析模板时候会自动添加 .value)
 */

defineOptions({
  name: "reactive/ref的细节"
});

const m1 = ref("abc");
const m2 = reactive({
  x: 1,
  y: {
    z: "abc"
  }
});

// 使用 ref 处理对象 ==> 对象会被自动转为 reactive 为 proxy 对象
const m3 = ref({ a1: 2, a2: { a3: "abc" } });
console.log(m1, m2, m3);
console.log(m3.value.a2); // 也是一个proxy对象

const update = (): void => {
  m1.value += "--";
  m2.x += 1;
  m2.y.z += "++";

  // m3
  m3.value = { a1: 3, a2: { a3: "abc--" } };
  m3.value.a2.a3 += "=="; // reactive 对对象进行深度数据劫持
  console.log(m3.value.a2);
};
</script>

<template>
  <div>
    <div>m1: {{ m1 }}</div>
    <div>m2: {{ m2 }}</div>
    <div>m2: {{ m3 }}</div>

    <button @click="update">更新</button>
  </div>
</template>

<style scoped></style>
