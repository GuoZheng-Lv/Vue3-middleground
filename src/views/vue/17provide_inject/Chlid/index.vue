<script setup lang='ts'>
import { inject } from 'vue';
import GrandSon from '../GrandSon/index.vue'

defineOptions({
  name: 'Child'
})
const color = inject('color')

</script>

<template>
  <div>
    子组件: {{ color }}
    <br />
    <GrandSon />
  </div>
</template>

<style scoped></style>
