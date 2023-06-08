<script setup>
  import { ref} from 'vue'
  const index = ref(0)
  const vF = (el , binding) => {
    index.value++
    el.value = binding.value
  }
  const count = ref(0)
  const click = ()=>{
    count.value ++
  }
</script>
<template>
  <div>update count : {{ index }}</div>
  <input type="text" v-f="count" />
  <button @click="click" >click here to test</button>
  
</template>