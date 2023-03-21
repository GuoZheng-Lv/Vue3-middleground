
import { reactive } from 'vue'
/*
自定义shallowRef
*/
export const shallowRef = (target) => {
  const result = {
    _value: target, // 用来保存数据的内部属性
    _is_ref: true,// 用来标识ref对象
    get value() {
      return this._value
    },
    set value(val) {
      this._value = val
      console.log('set value 数据已更新,去更新界面');
    }
  }
  return result
}

// 自定义ref
export const ref = (target) => {
  if (target && typeof target === 'object') {
    target = reactive(target)
  }
  const result = {
    _value: target, // 用来保存数据的内部属性
    _is_ref: true, // 用来标识是ref对象

    get value() {
      return this._value
    },
    set value(val) {
      this._value = val
      console.log("set value 数据已更新, 去更新界面");
    }
  }
  return result
}




