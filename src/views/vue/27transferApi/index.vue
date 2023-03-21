<template>
  <div class="box">
    <div>
      app.component():如果同时传递一个组件名字符串及其定义，则注册一个全局组件；如果只传递一个名字，则会返回用该名字注册的组件 (如果存在的话)。
    </div>
    <div>
      app.config():每个应用实例都会暴露一个 config 对象，其中包含了对这个应用的配置设定。你可以在挂载应用前更改这些属性 (下面列举了每个属性的对应文档)。
    </div>
    <div>
      app.directive():如果同时传递一个名字和一个指令定义，则注册一个全局指令；如果只传递一个名字，则会返回用该名字注册的指令 (如果存在的话)。
    </div>
    <div>
      app.mount():将应用实例挂载在一个容器元素中。
    </div>
    <div>
      app.unmount():卸载一个已挂载的应用实例。卸载一个应用会触发该应用组件树内所有组件的卸载生命周期钩子。
    </div>
    <div>
      app.use():安装一个插件。
    </div>
  </div>
</template>

<script setup lang='ts'>
//  将原来的全局 API 转移到应用对象
// app.component()
// app.config()
// app.directive()
// app.mount()
// app.unmount()
// app.use()
</script>

<style scoped>
.box div {
  margin: 20px;
}
</style>