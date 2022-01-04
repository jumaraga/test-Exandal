<template>
  
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "table",
  props:{
    registros:Array
  } ,
  data(){
    return{}
  },
  created(){
    console.log(typeof this.registros)
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
