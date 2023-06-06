<template>
  <div>readonly demo : {{ value }}</div>
</template>
<script setup>
  import {ref , readonly} from 'vue'
  var count = ref(0)
  var readonlyCount = readonly(count)
  setTimeout( () => { readonlyCount.value + 100 }, 2000)
</script>