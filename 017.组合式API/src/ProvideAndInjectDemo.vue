<script setup>
  import { provide , ref } from 'vue'
  import Demo2 from './Demo2.vue';

  const val = ref(0)
  setInterval(()=> { val.value++} ,500)

  provide('demo' , val)
</script>
<template>
  <Demo2 />
</template>