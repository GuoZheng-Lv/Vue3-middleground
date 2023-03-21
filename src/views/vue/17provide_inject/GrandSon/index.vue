<script setup lang='ts'>
import { inject } from 'vue';
const color = inject('color')

</script>

<template>
  <div>
    曾孙组件: {{ color }}
  </div>
</template>

<style scoped></style>
