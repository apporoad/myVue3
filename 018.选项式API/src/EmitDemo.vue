<script>

export default {
  data(){
    return {
      count :1
    }
  },
  emits:['click1' , 'click2'],
  expose:['publicMethod'],
  methods:{
    onBtn1(){
      this.$emit('click1')
    },
    onBtn2(){
      this.$emit('click2')
    },
    publicMethod(){
      this.count += 10
    }
  }
}
</script>
<template>
  <div>emits Demo : <button @click="onBtn1">btn1</button><button @click="onBtn2">btn2</button></div>
  <div>expose method : {{ count }}</div>
</template>