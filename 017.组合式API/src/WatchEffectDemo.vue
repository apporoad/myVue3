<template>
  <div>watch effect demo : {{ value.val1 }} => {{ value.val2 }} </div>
</template>
<script setup>
  import { reactive , watchEffect} from 'vue'
  var value = reactive({
    val1 : 0,
    val2 : 0
  })
  watchEffect(()=> {
    value.val2 = value.val1 * 2
  })

  setInterval(()=>{ value.val1++} ,500)
</script>