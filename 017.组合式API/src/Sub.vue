<script setup>
  // import {toRef } from 'vue'
  var props = defineProps({
    text : String
  })
  // const text = toRef(props , 'text') 
  // console.log(props)
  
</script>
<template>
  <div>
    <input type="text" :value="text" />
  </div>
</template>