import { ref, onMounted, onUnmounted } from "vue";
import { useEventListener } from "@/hooks/useEvent";

// 按照惯例, 组合式函数名以Use开头
export const useMouse = () => {
  // 被组合函数封装和管理的状态
  const x = ref(0);
  const y = ref(0);

  // 组合是函数可以随时更改器状态
  // const update = (event) => {
  //   x.value = event.pageX
  //   y.value = event.pageY
  // }
  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.addEventListener('mousemove', update))


  // useMouse() 组合式函数可以被简化为：
  useEventListener(window, "mousemove", event => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // 通过返回值暴露所管理的状态
  return { x, y }
}