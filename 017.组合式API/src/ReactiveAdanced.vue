<script setup>
  import { ref ,shallowRef  } from 'vue'
  var valueShallow = shallowRef({ count1 : 1})
  var valueRef = ref ({count : 1})
  setInterval(()=> { 
    valueShallow.value.count1++ ; 
    valueRef.value.count ++ } , 500)
</script>
<template>
  <div> shallowRef({ count : 1}).count : {{ valueShallow.count1 }}</div>
  <div> ref({ count : 1}).count : {{ valueRef.count }}</div>
</template>