import { reactive, toRefs } from 'vue'
interface use {
  foo2: String,
  bar2: String
}


export const useReatureX = () => {
  const status: use = reactive({
    foo2: 'a',
    bar2: 'b'
  })

  setTimeout(() => {
    status.bar2 += '++'
    status.bar2 += '++'
  }, 1000);

  return toRefs(status)
}

