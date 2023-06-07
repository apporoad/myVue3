<script>
export default {
  say : 'hello hello good day',
  props:{
    prop : String
  },
  data(){
    return {
      a : 1,
      b : 2,
      text : 'ok'
    }
  },
  methods:{
    test(){
      this.$data.a++
    },
    testProp(){
      alert(this.$props.prop)
    },
    testEl(){
      var app = this.$el
      app.style.color = Math.random() > 0.5 ? 'red' : 'green'
    },
    testOption(){
      this.text = this.text == this.$options.say ? 'hi' :  this.$options.say
    },
    testParant(){
      var p = this.$parent
      if(p){
        this.text = p.count
      }
    } ,
    testRoot(){
      var r = this.$root
      this.text = r.count + 60
    }
  }
}
</script>
<template>
  <div>instance demo : 
    <div>text : {{ text }}</div>
    <div>a : {{ a }}</div>
    <div>b : {{ b }}</div>
    <div @click="testProp">click me to test $props : {{ prop }}</div>
    <button @click="test()">click me to test $data</button>
    <button @click="testEl()">click me to test $el</button>
    <button @click="testOption" >click me to test $options</button>
    <button @click="testParant">click me to test $parent</button>
    <button @click="testRoot">click met to test $root</button>

    $refs
    $attrs
    $watch()
    $forceUpdate()
    ​$emit()
    $nextTick()
    <br />
  </div>
</template>