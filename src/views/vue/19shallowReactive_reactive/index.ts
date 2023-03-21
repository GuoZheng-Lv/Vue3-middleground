const reactiveHandler = {
  get(target, key) {
    if (key === "_is_reactive") return true;

    return Reflect.get(target, key);
  },

  set(target, key, value) {
    const result = Reflect.set(target, key, value);
    console.log("数据已更新, 去更新界面");
    return result;
  },

  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key);
    console.log("数据已删除, 去更新界面");
    return result;
  },
};

/* 
自定义shallowReactive
*/
export const shallowReactive = (obj) => {
  return new Proxy(obj, reactiveHandler);
}

/* 
自定义reactive
*/
export const reactive = (target) => {
  if (target && typeof target === "object") {
    Object.entries(target).forEach(([key, value]) => {
      target[key] = reactive(value);
    });

    return new Proxy(target, reactiveHandler);
  }

  return target;
}
