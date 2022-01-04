

<script>
import { defineComponent } from "vue";
const date = Date();
console.log(date.getFullYear());
export default defineComponent({
  name: "Form",
  props: {
    getRegistros:Function
  },

  methods:{
      
  }
})

</script>
<style scoped>
   
</style>