<script setup lang="ts">
defineOptions({
  name: "proxy讲解"
});

/**
 * Proxy:
 *    proxyUser是代理对象, user是被代理对象
 *     后面所有的操作都是通过代理对象来操作被代理对象内部属性
 */

// 定义接口规范
interface userStandard {
  sex?: string;
  name: String;
  age: Number;
}
// 定义数据
const user: userStandard = {
  name: "John",
  age: 12
};

// 定义proxy对象
/**
 * @classdesc target {OBJECT} user原对象
 * @classdesc prop {String} user调用的值
 */
const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log("被劫持get()", target, prop);
    return Reflect.get(target, prop);
  },

  set(target, prop, val) {
    console.log("劫持set()", target, prop, val);
    return Reflect.set(target, prop, val);
  },

  deleteProperty(target, prop) {
    console.log("劫持deleteProperty", target, prop);
    return Reflect.deleteProperty(target, prop);
  }
});

console.log("进行对比", user === proxyUser);
console.log(proxyUser.name, proxyUser.age);

// 设置属性值
proxyUser.name = "bob";
proxyUser.age = 13;
console.log(user);
// 添加属性
proxyUser.sex = "男";
console.log(user);
// 删除属性
delete proxyUser.sex;
console.log(user);
</script>

<template>
  <div class="box">打开控制台查看具体信息</div>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
