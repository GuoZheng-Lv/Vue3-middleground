import { reactive, ref, readonly } from 'vue'
/* 
判断是否是ref对象
*/
function isRef(obj) {
  return obj && obj._is_ref;
}

/* 
判断是否是reactive对象
*/
function isReactive(obj) {
  return obj && obj._is_reactive;
}

/* 
判断是否是readonly对象
*/
function isReadonly(obj) {
  return obj && obj._is_readonly;
}

/* 
是否是reactive或readonly产生的代理对象
*/
function isProxy(obj) {
  return isReactive(obj) || isReadonly(obj);
}

/* 测试判断函数 */
console.log(isReactive(reactive({})));
console.log(isRef(ref({})));
console.log(isReadonly(readonly({})));
console.log(isProxy(reactive({})));
console.log(isProxy(readonly({})));