<script setup>
    import { ref} from 'vue'
    import Sub1 from './Sub1.vue'
    import Sub2 from './Sub2.vue'
    const count = ref(0)
    setInterval(()=>{
      count.value++
    },500)

    const view = ref(false)
    const changeView = ()=>{
      view.value = !view.value
    }
    const getView = ()=>{
      return view.value ? Sub1 : Sub2
    }
    const getSuspendValue =  ()=>{
        throw Error('error')
    }
</script>
<template>
    <div id ="h3">
      <!-- <Transition name="fade" mode="out-in" enter>
        hello {{count}} 
      </Transition> -->
    </div>
    <KeepAlive>
      <component :is="getView()"></component>
    </KeepAlive>
    <button @click="changeView">click to test keepalive</button>

    <div class="teleport" > here is demo of Teleport</div>
    <Teleport to=".teleport">
      <span> hello good day</span>
    </Teleport>
    <Teleport to=".teleport">
      hi !
    </Teleport>
    <Suspense>
      <template #default>
        here is suspense{{ 'todo' }}
      </template>
      <template #fallback>
        here is suspense fallback
      </template>
    </Suspense>
</template>
<style scoped>
#h3 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 载入动画效果 */
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
} */
.fade-enter-active, .fade-leave-active {
	transition: all .2s ease;
}
.fade-enter,.fade-leave-active {
	opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>