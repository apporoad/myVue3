<script setup>
  import { useSlots } from 'vue'
  const slots = useSlots()
  const print = ()=>{
    alert(JSON.stringify(slots))
  }
</script>
<template>
  <div @click="print">
    <span> here is slot</span> <slot name="left" ></slot><slot></slot><slot name="right"></slot>
  </div>
</template>