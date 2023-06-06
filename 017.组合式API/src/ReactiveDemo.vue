<template>
  <div>reactive demo : {{ val.count }}</div>
</template>
<script setup>
import { reactive } from 'vue'
var val = reactive({
  count : 1
})
setInterval(()=>{
  val.count++
} ,1000)
</script>