<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "ref的作用"
});
/**
 * ref(initValue)
 *
 * 作用: 定义 一个  数据的响应式
 * 语法: const xxx = ref(initValue)
 *     - 创建一个包含响应式数据的引用(reference)对象
 *     - js 中操作数据: xxx.value
 *     - 模板中操作数据: 不需要value
 * 一般用来定义一个基本类型的响应式数据
 */

const count: number = ref(1);
const upData = () => {
  console.log(count);

  count.value = ++count.value;
};
</script>

<template>
  <div class="ref_class">
    <div>
      <span>{{ count }}</span>
    </div>
    <button @click="upData">更新点击测试REF</button>
  </div>
</template>

<style scoped lang="scss">
.ref_class {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
  }
}
</style>
