<script setup>
  import { onMounted , ref , onUpdated , onBeforeUpdate } from 'vue'
  const val = ref(1)
  const count = ref(0)
  const beforeCount = ref(0)
  onMounted(()=>{
    val.value = val.value + 100
  })
  // onUpdated(()=> {  count.value = count.value + 1})
  // onBeforeUpdate(()=> {  beforeCount.value = beforeCount.value + 1})
</script>

<template>
  <div>onMounted : {{ val }}  <button @click="val++">Add val</button></div>
  <div>onUpdated  count: {{ count }}</div>
  <div>onBeforeUpdate count :  {{ beforeCount }}</div>
</template>