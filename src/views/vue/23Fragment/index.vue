<script setup lang='ts'>
</script>

<template>
  <div>Fragment(片断) 不过控制台会警告</div>
  <div>
    在 Vue2 中: 组件必须有一个根标签<br>
    在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中<br>
    好处: 减少标签层级, 减小内存占用<br>
  </div>
  <h2>aaaa</h2>
  <h2>aaaa</h2>
</template>

<style scoped></style>
