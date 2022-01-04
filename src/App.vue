<template>
  <form action="http://67.205.141.7:3000/api/lista" method="POST" @submit.prevent="addRegistro">  
    <h1>Formulario de registro</h1>
    <div class="row mb-3">
        <label class="form-label" for="">Fecha</label>
        <input name="fecha" type="date" v-model="registro.fecha">
      <label class="form-label" for="turno">Turno</label>
      <input name="turno" type="text" id="turno" list="data" size="1" maxlength="1" max="2" v-model="registro.turno"/>
      <datalist id="data">
        <option value="1" />
        <option value="2" />
      </datalist>
    </div>
    <div class="row mb-3">
      <label class="form-label" for="">Fecha de Registro</label>
      <input name="fecha_registro" type="date" v-model="registro.fecha_registro">
      <label class="form-label" for="">Hora</label>
      <input name="hora" type="time" v-model="registro.hora">
    </div>
    <div class="row mb-3">
      <label class="form-label" for="">Código de Operario</label>
      <input name="codigo_operario" type="text" v-model="registro.codigo_operario" maxlength="5">
      <label class="form-label" for="">Nº Orden de fabricación</label>
      <input name="orden_fabricacion" type="text" v-model="registro.orden_fabricacion" maxlength="8">
    </div>
    <div class="row mb-3">
      <label class="form-label" for="">Nº Lote a MP</label>
      <input name="numero_lote" type="text" v-model="registro.numero_lote">
      <label class="form-label" for="">Código de material</label>
      <input name="codigo_material" type="text" v-model="registro.codigo_material" maxlength="6" >
    </div>
    <div class="row mb-3">
      <label class="form-label" for="">Und Med</label>
      <input name="und_med" type="text" v-model="registro.und_med">
      <label class="form-label" for="">KG</label>
      <input name="kg" type="number" v-model="registro.kg">
    </div>
    <label class="form-label" for="">Descripción</label>
    <textarea name="descripcion" id="" cols="10" rows="5" v-model="registro.descripcion"></textarea>
    <button type="submit"> Registrar</button>
  </form>
  <div class="product_list">
    <table class="table">
      <thead>
        <tr>
          <th class="first_columm">Fecha</th>
          <th>turno</th>
          <th>Fecha de Registro</th>
          <th>Hora</th>
          <th>Código Operario</th>
          <th>Nombre Operario</th>
          <th>Nº Orden de fabricación</th>
          <th>Nº Lote a MP</th>
          <th>Código de material</th>
          <th>Descripción</th>
          <th>Und Med</th>
          <th class="last_column">KG</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="registro of registros" :key="registro._id">
          <td class="first_columm">{{ registro.fecha }}</td>
          <td>{{ registro.turno }}</td>
          <td>{{ registro.fecha_registro }}</td>
          <td>{{ registro.hora }}</td>
          <td>{{ registro.codigo_operario }}</td>
          <td>{{ registro._id }}</td>
          <td>{{ registro.orden_fabricacion }}</td>
          <td>{{ registro.numero_lote }}</td>
          <td>{{ registro.codigo_material }}</td>
          <td>{{ registro.descripcion }}</td>
          <td>{{ registro.und_med }}</td>
          <td class="last_column">{{ registro.kg }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "./components/table.vue";
export default defineComponent({
  name: "App",
    data(){
    return{
      registro:{
        fecha:'',
        turno:null,
        fecha_registro:'',
        hora:null,
        codigo_operario:'',
        orden_fabricacion: null,
        numero_lote: null,
        codigo_material:'',
        und_med:'',
        kg: null,
        descripcion:''
      },
      registros:[]
    }
  },
  created(){
    this.getRegistros()
  },
  methods: {
  
    getRegistros (){
       fetch('http://67.205.141.7:3000/api/lista')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.registros = data;
          console.log(this.registros)
        })
    },
    addRegistro(){
      console.log(this.registro)
      fetch('http://67.205.141.7:3000/api/lista',{
        method: 'POST',
        body: JSON.stringify(this.registro),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        this.getRegistros();
      })
      
    },
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  display: flex;
  padding: 20px;
}
form{
      width:40%;
      margin-inline-end: 20px ;
   }
   .row{
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
   }
    .product_list{
    width: 100%;
    height: fit-content;
    background-color: aquamarine;
    align-items: center;
  }
  .table{
    padding: 0;    
    border-spacing: 0;
    width:100%;
    height: 100%;
    align-items: center;
  }
.first_columm {
  border-inline-start: black 2px solid;
}
td {
  border-inline-start: black 2px solid;
  border-block-end: black 2px solid;
  width-max: 100px;
}
.last_column{
  border-inline:black 2px solid ;
}
th{ 
  border-inline-start: black 2px solid;
  width-max: 100px;
  background-color:#44546a ;
  border-block: black 2px solid;
  padding: 0;
  height: 100%;
  align-items: center;
}
</style>
