<script setup>
import {h } from 'vue'
const render = ()=>{
  return h('div' , [   'hello hello good day : ',h('button' , {} , 'click me') ] )
}
</script>
<template>
  <render />
</template>