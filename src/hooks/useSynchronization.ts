import { ref, isRef, unref, watchEffect } from 'vue'

// 异步函数
/**
 * 
 * @param url string 
 * @returns obj 优化前只能触发一次
 */
export const useFetches = (url: string) => {
  const data = ref(null)
  const error = ref(null)
  fetch(url).then(res => data.value = res.url).catch(err => error.value = err)
  return { data, error }
}


/**
 * 
 * @param url 
 * @returns 
 * 这个版本的 useFetch() 现在同时可以接收静态的 URL 字符串和 URL 字符串的 ref。当通过 isRef() 检测到 URL 是一个动态 ref 时，它会使用 watchEffect() 启动一个响应式的 effect。该 effect 会立刻执行一次，并在此过程中将 URL 的 ref 作为依赖进行跟踪。当 URL 的 ref 发生改变时，数据就会被重置，并重新请求。
 */

export const useFetch = (url: string) => {
  const data = ref(null)
  const error = ref(null)

  const doFetch = () => {
    data.value = null
    error.value = null

    fetch(url).then(res => data.value = res.url).catch(err => error.value = err)
  }

  unref(url) ? watchEffect(doFetch) : doFetch()
  return { data, error }
}
