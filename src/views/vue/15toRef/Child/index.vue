<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";



// const props = defineProps(/* ... */)

// // 将 `props.foo` 转换为 ref，然后传入
// // 一个组合式函数
// useSomeFeature(toRef(props, 'foo'))

const component = defineComponent({
  props: {
    foo: {
      type: Number,
      require: true,
    },
  },

  setup(props, context) {
    const length = useFeatureX(toRef(props, "foo"));
    return {
      length,
    };
  },
});

function useFeatureX(foo: Ref) {
  const lenth = computed(() => foo.value.length);
  return lenth;
}
export default component;
</script>

<template>
  <div>
    <h2>Child</h2>
    <h3>{{ foo }}</h3>
    <h3>{{ length }}</h3>
  </div>
</template>

<style scoped></style>
