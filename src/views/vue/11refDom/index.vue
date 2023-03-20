<script setup lang="ts">
import { ref, onMounted } from "vue";
/**
 * 功能: 使用ref函数获取组件中的标签元素
 * 功能需求 :让输入框自动获取焦点,并监听输入内容
 */
// 使用ref函数获取组件中的标签元素
const inputRef = ref<HTMLElement | null>(null);
// 挂载阶段让ref绑定的input自动使用focus()焦点事件
onMounted(() => {
  inputRef.value && inputRef.value.focus();
});

const inputBlur = ref(null);
const inputPlaceholder = ref("占位符");

// 输入监听事件
const changeInput = () => {
  console.log(inputBlur.value);
};
</script>

<template>
  <div>
    <h2>App</h2>
    <input type="text" />
    <br />
    <input
      v-model="inputBlur"
      @input="changeInput"
      :placeholder="inputPlaceholder"
      type="text"
      ref="inputRef"
    />
  </div>
</template>

<style scoped></style>
