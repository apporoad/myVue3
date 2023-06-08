<script setup>
  import { ref , reactive} from 'vue'
  const vtext = ref('hello')

  const vHtml = ref(0)
  const testVHtml = ()=>{vHtml.value++}

  const vShow= ref(true)
  const testVShow = ()=>{ vShow.value = !vShow.value}

  const vIf = ref(true)
  const testVIf= ()=>{ vIf.value = !vIf.value}

  const vIfElse = ref(true)
  const testVIfElse = () => { vIfElse.value = !vIfElse.value}

  const vFor = reactive([])
  const testVFor = ()=>{ vFor.push('hello' + (vFor.length + 1))}

  const vModel = ref(null)
</script>
<template>
  <div> v-text : <span v-text="vtext"></span></div>
  <div>v-html : {{ vHtml }} <button @click="testVHtml">click to test v-html</button></div>
  <div><span v-show="vShow"> v-show</span><button @click="testVShow">click to test v-show</button> </div>
  <div><span v-if="vIf"> v-if</span><button @click="testVIf">click to test v-if</button> </div>
  <div><span v-if="vIfElse"> v-if </span><span v-else> v-else</span><button @click="testVIfElse">click to test v-if-else</button></div>
  <div><button @click="testVFor">click to test v-for</button><span v-for="value in vFor">{{ value }}</span></div>
  <div><input type="text" v-model="vModel" /><span>{{  vModel }}</span></div>
  <div><input type="text" v-model="vModel" /><span>{{  vModel }}</span></div>
  <div v-pre> {{ here is v-pre , hello hello good day }}</div>
  <div v-once>here is v-once {{ vHtml }} <button  @click="testVHtml">click to test v-once</button></div>
</template>