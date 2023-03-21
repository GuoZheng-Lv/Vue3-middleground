<script setup lang='ts'>
/**
 * createApp()
 * defineProperty()
 * defineAsyncComponent()
 * nextTick()
 */
</script>

<template>
  <div class="box">
    <div>
      createApp():创建一个应用实例。<br>
      详细信息:第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。

      实例:
      import { createApp } from 'vue'<br>

      const app = createApp({ <br>
      /* root component options */<br>
      })<br>
    </div>

    <div>
      defineProperty():方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。<br>
    </div>

    <div>
      defineAsyncComponent():定义一个异步组件，它在运行时是懒加载的。参数可以是一个异步加载函数，或是对加载行为进行更具体定制的一个选项对象。<br>
    </div>
    <div>
      nextTick():等待下一次 DOM 更新刷新的工具方法。<br>
      当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。<br>

      nextTick() 可以在状态改变后立即使用，以等待 DOM 更新完成。你可以传递一个回调函数作为参数，或者 await 返回的 Promise。
    </div>
  </div>
</template>

<style scoped>
.box div {
  margin: 20px;
}
</style>
