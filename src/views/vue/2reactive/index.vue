<script setup lang="ts">
import { reactive } from "vue";
defineOptions({
  name: "reactive技术点"
});

/**
 * reactive
 *
 * 作用: 定义多个数据的响应式
 * const xxx = reactive(obj) : 接收一个普通对象然后返回该对象的响应式代理器对象
 * 响应式转换是 "深层的" : 会影响对象内部所有嵌套的属性
 * 内部基于 ES6 的 --> Proxy <-- 实现，通过代理对象操作源对象内部数据都是响应式的
 * 在reactive定义的多个数据的响应式中,更改数据是不用 key.value 来进行更改相应的proxy值的
 */
// 定义数据类型
const status = reactive({
  name: "tom",
  age: 18,
  wife: {
    name: "marry",
    age: 22
  }
});
// 浅层
const upData = (): void => {
  status.name += "--";
  status.age += 1;
};

// 深度深度测试REACTIVE

const depthReactiveClick = (): void => {
  status.wife.name += "++";
  status.wife.age += 2;
};
</script>

<template>
  <div class="reactiveClass">
    <div class="box">
      <div class="fontSize">name: {{ status.name }}</div>
      <div class="fontSize">age: {{ status.age }}</div>
    </div>
    <div class="fontSize">wife: {{ status.wife }}</div>
    <div class="btn" @click="upData">更新点击测试REACTIVE</div>
    <div class="btn" @click="depthReactiveClick">深度深度测试REACTIVE</div>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reactiveClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  border: 1px solid red;
  margin: 20px;
}
</style>
