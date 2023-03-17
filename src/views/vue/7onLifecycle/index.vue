<script setup lang="ts">
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount
} from "vue";
const msg = ref("abc");

const update = (): void => {
  msg.value += "--";
};

/**
 * 执行顺序
 *  beforeCreate --> 使用 setup()
 *  created --> 使用 setup()
 *  beforeMount  --> onBeforeMount()
 *  mounted --> onMounted()
 *  beforeUpdate --> onBeforeUpdate
 *  update --> onUpdated
 *  beforeDestroy --> onBeforeUnmount
 *  destroyed --> onUnmounted
 *  errorCaptured --> onErrorCaptured
 */

/**
 * setup 初始化阶段
 */
console.log("setup,在所有生命周期前执行,也就是 beforeCreate created ");
onBeforeMount(() => console.log("onBeforeMount 执行")); // 挂载阶段
onMounted(() => console.log("onMounted 执行")); // 挂载完成
onBeforeUpdate(() => console.log("onBeforeUpdate 执行")); // 更新阶段
onUpdated(() => console.log("onUpdated 执行")); // 更新完成
onBeforeUnmount(() => console.log("onBeforeUnmount 执行")); // 卸载阶段
onUnmounted(() => console.log("onUnmounted 执行")); // 卸载完成
</script>

<template>
  <div class="about">
    <h2>msg: {{ msg }}</h2>
    <hr />
    <button @click="update">更新</button>
  </div>
</template>

<style scoped>
h2 {
  font-size: 100px;
}
</style>
