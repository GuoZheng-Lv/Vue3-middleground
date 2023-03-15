<script setup lang="ts">
import { reactive, ref } from "vue";
import child from "./child/index.vue";

/**
 * > setup 执行的实际
 *   - 在beforeCreate 之前执行一次, 在此组件对象还没有创建
 *   - this 是 undefined, 不能通过this 来访问 data/computed/methods/this.props
 *   - 其实所有的 composition Api 相关回调函数中也都不可以
 * > setup 的返回值
 *   - 一般都返回一个对象: 为模板提供数据,也就是模板中可以直接使用此对象的所有属性/方法
 *   - 返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
 *   - 返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
 *   - 如果有重名, setup 优先
 *   !!! 注意
 *   - 一般不要混合使用: methods 中可以访问 setup 提供的属性和方法,但在 setup 方法中不能访问 data 和 methods
 *   - setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据
 * > setup的参数
 *   - setup(props,context) / setup(props,{attrs,slots,emit})
 *   - props: 父组件传给子组件的属性, (在子组件中通过 props 声明过的属性)
 *   - attrs: 没有在子组件中通过props 声明过的属性,相当于this.$slots
 *   - emit:  用来分发自定义事件的函数,相当于 this.$emit
 *
 */

const msg = ref("abc");

const fn = (content: string) => {
  msg.value += content;
};
</script>

<template>
  <div>
    <div>app</div>
    <div>msg : {{ msg }}</div>
    <div @click="fn('--')">更新</div>

    <child :msg="msg" msg2="cba" @fn="fn"></child>
  </div>
</template>

<style scoped></style>
