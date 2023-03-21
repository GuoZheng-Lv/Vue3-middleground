
const readonlyHandler = {
  get(target, key) {
    if (key == '_is_readonly') return true
    return Reflect.get(target, key)
  },

  set() {
    console.warn('只读的,不能修改')
    return true
  },

  deleteProperty() {
    console.warn('只读的,不能删除');
    return true
  }
}

// 自定义 shallowReadonly()
export const shallowReadonly = (obj) => {
  return new Proxy(obj, readonlyHandler)
}

// 自定义 readonly()
export const readonly = (target) => {
  if (target && typeof target === 'object') {
    if (target instanceof Array) {
      // 数组判断
      target.forEach((item, index) => {
        // 递归
        target[index] = readonly(item)
      })
    } else {
      // 对象
      Object.keys(target).forEach(key => {
        // 递归
        target[key] = readonly(target[key])
      })
    }
    const proxy = new Proxy(target, readonlyHandler);

    return proxy;
  }
  return target;
}