<script>
import  Sub from './Sub.vue'
import EmitDemo from './EmitDemo.vue'
import {ref} from 'vue'
import RenderDemo from './RenderDemo.vue'
import SlotDemo from './SlotDemo.vue'
import InstanceDemo from './InstanceDemo.vue'

export default {
  components: { Sub, EmitDemo, RenderDemo, SlotDemo, InstanceDemo },
  data(){
    // var eDemo = ref(null)
    return { 
      count : 1,
      subText : 'hello hello good day',
      watchValue : 0
    }
  },
  created(){
    this.count++
  },
  computed:{
    cValue(){
      return this.count + 30
    }
  },
  methods:{
    fn(){
      return this.count + 50
    },
    btn1(){
      this.count++
    },
    btn2(){
      this.count = this.count + 2
    },
    iem(){
      this.$refs.eDemo.publicMethod()
      // this.eDemo.publicMethod()
    }
  },
  watch:{
    count(){
      this.watchValue = this.count + 100
    }
  }
}
</script>

<template>
  <div>{{ count }}</div>
  <Sub :text ="subText" :num="count"/>
  <div>computed : {{ cValue }}</div>
  <div>fn : {{ fn() }}</div>
  <div>watch : {{ watchValue }}</div>
  <div><button @click="count++">add count</button></div>
  <EmitDemo @click1="btn1" @click2="btn2" ref="eDemo" />
  <div><button @click="iem">invoke expose method</button></div>
  <RenderDemo />
  <SlotDemo>
    <template v-slot:left><span> i am left | </span></template>
    <template v-slot:default><button>i am main</button> | </template>
    <template v-slot:right><span>i am right</span></template>
  </SlotDemo>
  <InstanceDemo :prop ="1" />
</template>