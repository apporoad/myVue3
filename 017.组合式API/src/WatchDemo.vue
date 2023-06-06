<template>
  <div>watch demo :  [{{ val1 }}]  => [{{ val2 }}]</div>
</template>
<script setup>
  import { ref,watch } from 'vue'
  const val1 = ref(1)
  const val2 = ref(2)
  watch(val1 , ()=> { val2.value = val1.value + 100})

  setInterval(()=>{
    val1.value++
  },500)
</script>