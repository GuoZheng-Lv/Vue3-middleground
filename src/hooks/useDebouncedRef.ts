import { ref, customRef } from "vue";
/*
customRef:
创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求: 
使用 customRef 实现 debounce 的示例
*/
/*
实现函数防抖的自定义ref
*/

export function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: any
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();// 跟踪数据
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          // 告诉Vue去触发界面更新
          trigger(); // 触发函数
        }, delay);
      },
    }
  })
}