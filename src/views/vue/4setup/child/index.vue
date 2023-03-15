<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted } from "vue";
defineOptions({
  name: "child"
});
defineProps({
  msg: {
    type: String,
    default: "默认的"
  }
});
const emit = defineEmits(["fn"]);
onMounted(() => {
  console.log("beforeCreate", this);
});
// 组件时开发
const m = ref(2);
const n = ref(3);
const update = (): void => {
  m.value += 2;
  n.value += 2;
  emit("fn", "++");
};

// export default defineComponent({
//   name: "child",
//   props: ["msg"],
//   emits: ["fn"], // 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验
//   data() {
//     console.log("data", this);
//     return {
//       // n: 1
//     };
//   },
//   beforeCreate() {
//     console.log("beforeCreate", this);
//   },
//   methods: {
//     // update () {
//     //   this.n++
//     //   this.m++
//     // }
//   },

//   // setup (props, context) {
//   setup(props, { attrs, emit, slots }) {
//     console.log("setup", this);
//     console.log(props.msg, attrs.msg2, slots, emit);
//     const m = ref(2);
//     const n = ref(3);
//     function update() {
//       // console.log('--', this)
//       // this.n += 2
//       // this.m += 2

//       m.value += 2;
//       n.value += 2;

//       // 分发自定义事件
//       emit("fn", "++");
//     }

//     return {
//       m,
//       n,
//       update
//     };
//   }
// });
</script>

<template>
  <div>
    <h3>{{ n }}</h3>
    <h3>{{ m }}</h3>

    <h3>msg: {{ msg }}</h3>
    <h3>msg2: {{ $attrs.msg2 }}</h3>

    <slot name="xxx"></slot>

    <button @click="update">更新</button>
  </div>
</template>

<style scoped></style>
