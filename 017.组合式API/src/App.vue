<script setup>
import {ref} from 'vue'
import Sub from './Sub.vue';
import RefDemo from './RefDemo.vue';
import ComputedDemo from './ComputedDemo.vue';
import ReactiveDemo from './ReactiveDemo.vue';
import ReadonlyDemo from './ReadonlyDemo.vue';
import WatchDemo from './WatchDemo.vue';
import WatchEffectDemo from './WatchEffectDemo.vue';
import ReactiveTool from './reactiveTool.vue';
import ReactiveAdanced from './ReactiveAdanced.vue';
import LifeRecycleDemo from './LifeRecycleDemo.vue';
import ProvideAndInjectDemo from './ProvideAndInjectDemo.vue';
let count =  ref(0)

</script>
<template>
  <h3>hello good day</h3>
  <h3>点击次数：{{ count }}</h3>
  <button @click="count++">点击</button>
  <Sub :text="count" />
  <RefDemo />
  <ComputedDemo />
  <ReactiveDemo />
  <ReadonlyDemo />
  <WatchDemo />
  <WatchEffectDemo />
  <ReactiveTool />
  <ReactiveAdanced/>
  <LifeRecycleDemo />
  <ProvideAndInjectDemo />
</template>