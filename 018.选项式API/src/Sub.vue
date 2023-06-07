<script>
export default {
  name: 'Sub',
  props : {
    text : String,
    num : {
      type : Number,
      default: 0,
      requiered : false,
      validator : function(value){
        return value > 0
      }
    }
  }
}
</script>
<template>
<div>{{ text }} : {{ num }}</div>
</template>