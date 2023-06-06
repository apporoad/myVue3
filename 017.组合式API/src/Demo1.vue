<script setup>
  import { inject } from 'vue'
  const value = inject('demo')
</script>
<template>
  <div>ProvideAndInjectDemo : {{ value }}</div>
</template>