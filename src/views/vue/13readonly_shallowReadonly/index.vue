<script setup lang='ts'>
import { reactive, readonly, shallowReadonly } from "vue";

/**
 * readonly: 深度只读数据
 *  获取一个对象(响应式或纯对象) 或 ref 并返回原始代理的只读代理
 *  只读代理是深层次的: 访问的任何嵌套property也是只读的
 * shallowReadonly: 浅只读数据
 *  创建一个代理,是其自身的property为只读,单步执行嵌套对象的而深度只读转换
 * 应用场景:
 *  在某些特定情况下,我们可能不希望对数据进行更新的操作,那麽就可以包装生成一个只读代理对象来读取数据,而不能修改或者删除
 */

const state = reactive({
  a: 1,
  b: {
    c: 2,
  },
});
const rState1 = readonly(state)
const rState2 = shallowReadonly(state);

const update = () => {
  // rState1.a++ // error
  // rState1.b.c++ // error

  // rState2.a++ // error 无法为“a”赋值，因为它是只读属性。
  rState2.b.c++;
};
</script>

<template>
  <div>
    <div>app</div>
    <div>{{ rState2 }}</div>
    <button @click="update">更新</button>
  </div>
</template>

<style scoped></style>
