<template>
  <div>ref demo : {{ count }}</div>
</template>
<script setup>
  import {ref} from 'vue'
  const count = ref(0)
  setInterval(function(){
    count.value++
  }, 1000)
</script>