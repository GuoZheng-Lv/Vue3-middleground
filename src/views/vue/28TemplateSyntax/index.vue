<template>
  <div>
    模板语法变化
    v-model 的本质变化<br>

    prop：value -> modelValue；<br>
    event：input -> update:modelValue；<br>
    .sync 修改符已移除, 由 v-model 代替<br>
    v-if 优先 v-for 解析
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style scoped></style>