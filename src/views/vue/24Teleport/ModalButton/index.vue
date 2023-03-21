<script setup lang='ts'>
import { ref } from "vue";

const modalOpen = ref(false);
</script>

<template>
  <div>
  <button @click="modalOpen = true">
    Open full screen modal! (With teleport!)
  </button>
  <!-- to 传送的目的地, teleport 模态框 to是绑定的标签 
          to 允许接收值：
            期望接收一个 CSS 选择器字符串或者一个真实的 DOM 节点。
            提示：
            <Teleport> 挂载时，传送的 to 目标必须已经存在于 DOM 中。理想情况下，这应该是整个 Vue 应用 DOM 树外部的一个元素。
                如果目标元素也是由 Vue 渲染的，你需要确保在挂载 <Teleport> 之前先挂载该元素。
                   -->
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
