<template>
  <div>computed demo : {{ value }}</div>
</template>
<script setup>
import {ref ,computed} from 'vue'
const val = ref(0)
setInterval(()=>{
  val.value++
}, 1000)
const value = computed(()=> val.value + val.value)
</script>