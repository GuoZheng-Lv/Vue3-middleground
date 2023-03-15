<script setup lang="ts">
import { reactive, ref, computed, watch, watchEffect } from "vue";
defineOptions({
  name: "计算属性与监视"
});

/**
 * > computed 函数
 *    - 与 computed 配置功能一致
 *    - 只有getter
 *    - 有getter和setter
 * > watch 函数
 *    - 与 watch 配置功能一直
 *    - 监视指定的一个或多个响应式数据,一旦数据变化,就自动执行监视回调
 *    - 默认初始时不执行回调,但可以通过配置 immediate 为 true, 来指定初始化时立即执行第一次
 *    - 通过配置 deep 为true, 来指定深度监视
 * > watchEffect 函数
 *    - 不用直接指定要监视的数据,回调函数中使用的那些响应式数据就监视那些响应式数据
 *    - 默认初始时就会执行第一次,从而可以手机需要监视的数据
 *    - 监视数据发生变化时回调
 */

interface userStandard {
  firstName: String;
  lastName: String;
}

const user: userStandard = reactive({
  firstName: "A",
  lastName: "B"
});
// computed
const fullName1 = computed(() => user.firstName + "-" + user.lastName);
const fullName2 = computed({
  get: () => {
    console.log("fullName2   get");
    return user.firstName + "-" + user.lastName;
  },
  set: (value: string) => {
    console.log("fullName2 set");
    const names = value.split("-");
    user.firstName = names[0];
    user.lastName = names[1];
  }
});
const fullName3 = ref("");

// watchEffect 监视所有回调中使用的数据
watchEffect(() => {
  console.log("watchEffect");
  fullName3.value = user.firstName + "-" + user.lastName;
});

/**
 * watch
 * 使用 watch 的两个特性
 * - 深度监视
 * - 初始化立即执行
 */
watch(user, () => (fullName3.value = user.firstName + "-" + user.lastName), {
  immediate: true, // 是否初始化立即执行一次, 默认是false
  deep: true // 是否是深度监视, 默认是false
});
/* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
watch(fullName3, value => {
  console.log("watch");
  const names = value.split("-");
  user.firstName = names[0];
  user.lastName = names[1];
});
/* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
watch([() => user.firstName, () => user.lastName, fullName3], values => {
  console.log("监视多个数据", values);
});
</script>

<template>
  <div class="box">
    <div>firstName : <input type="text" v-model="user.firstName" /></div>
    <div>lastName : <input type="text" v-model="user.lastName" /></div>
    <div>fullName1 : <input type="text" v-model="fullName1" /></div>
    <div>fullName2 : <input type="text" v-model="fullName2" /></div>
    <div>fullName3 : <input type="text" v-model="fullName3" /></div>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin: 20px 0px;
  }
}
</style>
