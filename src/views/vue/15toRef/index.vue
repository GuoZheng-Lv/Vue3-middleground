<script setup lang='ts'>
import { reactive, toRef, ref } from "vue";
import Child from "./Child/index.vue";

/**
 * toRef:
 *  为源响应式对象上的某个属性创建一个 ref 对象, 而这内部操作是同一个数据值,更新时二者是同步的
 * 区别ref: 拷贝了一份新的数据值单独操作,更新时相互不影响
 * 应用: 当要将某个prop 的ref 传递给复合函数时, toRef 很有用
 */
const state = reactive({
  foo: 1,
  bar: 2
})

const foo = toRef(state, 'foo')
const foo2 = ref(state.foo)

const update = () => {
  state.foo++
  // foo.value++
  // foo2.value++  // foo和state中的数据不会更新
}





</script>

<template>
  <div>
    <h2>App</h2>
    <p>{{ state }}</p>
    <p>{{ foo }}</p>
    <p>{{ foo2 }}</p>

    <button @click="update">更新</button>

    <Child :foo="foo" />
  </div>
</template>

<style scoped></style>
