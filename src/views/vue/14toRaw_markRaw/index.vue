<script setup lang='ts'>
import { markRaw, reactive, toRaw } from "vue";

/**
 * toRaw
 *  返回有 reactive 或者 readonly 方法装欢成响应式代理的普通对象
 *  这是一个还原方法,可用于临时读取,访问不会被代理/跟踪,写入时也不会触发页面更新.
 * markRaw
 *  标记一个对象,时期永远不会转换为代理. 返回对象本身
 *  应用场景:
 *    有些值不应被设置为响应式, 例如负责的第三方类实例或者Vue组件对象.
 *    当渲染具有不可变数据源的大列表时,跳过代理转换可以提高性能
 */

const state = reactive<any>({ name: "tom", age: 25 })

const testToRaw = () => { const user = toRaw(state); user.age++ } // 数据更新, 界面不会更新

const testMarkRaw = () => {
  console.log(state);

  const likes = ['a', 'b']
  // state.likes = likes  // 页面可更新


  state.likes = markRaw(likes)  // likes数组就不再是响应式的数据  数据更新, 界面不会更新

  setTimeout(() => {
    state.likes[0] += '--'
  }, 2000)
  console.log(state);

}

</script>

<template>
  <div>
    <h2>{{ state }}</h2>
    <button @click="testToRaw">测试toRaw</button>
    <button @click="testMarkRaw">测试markRaw</button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid red;
  margin: 0px 20px;
}
</style>
