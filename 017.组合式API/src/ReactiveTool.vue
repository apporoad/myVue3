<script setup>
  import { readonly,isReadonly, ref, isRef , unref , toRef ,toValue , reactive ,toRefs , isProxy,isReactive } from 'vue'

</script>
<template>
  <h3> here is demo of reactive demo</h3>
  <div>isRef(1)  : {{ isRef(1) }}</div>
  <div>isRef(ref(1)) : {{ isRef(ref(1)) }}</div>
  <div>isRef(unref(ref(1))) : {{ isRef(unref(ref(1))) }}</div>
  <div>isRef(toRef(1)) : {{ isRef(toRef(1)) }}</div>
  <div>isRef(toValue(toRef(1))) : {{ isRef(toValue(toRef(1))) }}</div>
  <div>isRef(toRefs(reactive({ p :1})).p)  : {{ isRef(toRefs(reactive({ p :1})).p) }}</div>
  <div>isProxy({}) : {{ isProxy({}) }}</div>
  <div>isProxy(ref(1)) : {{ isProxy(ref(1)) }}</div>
  <div>isProxy(reactive({})): {{ isProxy(reactive({})) }}</div>
  <div>isReactive(reactive({})): {{ isReactive(reactive({})) }}</div>
  <div>isReadonly(readonly({})) : {{ isReadonly(readonly({})) }}</div>
</template>