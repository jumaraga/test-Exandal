const mongoose = require("mongoose");

const RegistroSchema = mongoose.Schema({
   fecha:{
      type: Date,
      /* required: true, */
   },
   turno:{
      type: String,
      /* required:true, */
   },
   fecha_registro:{
      type: Date,
      default: Date.now(),
   },
   hora:{
      type:String,
      /* required:true, */
   },
   codigo_operario:{
      type: String,
      /* required:true, */
      length: 5,
   },
   orden_fabricacion:{
      type: Number, 
      /* required:true, */
      length:8,
   },
   numero_lote:{
      type: Number,
      /* required:true, */
   },
   codigo_material:{
      type:String,
      /* required:true, */
      length:6,
   },
   und_med:{
      type: String,
      default:"KG"
   },
   kg:{
      type: Number,
      /* required:true, */
   },
   descripcion:{
      type: String,
      /* required:true, */
   },
}, {timestamps:true});


module.exports.Registro = mongoose.model("newRegistro", RegistroSchema);