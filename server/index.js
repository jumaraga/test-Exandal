const express = require("express");
const mongoose =require('mongoose');
require('dotenv').config();
const path =require('path');
const  {Registro}  = require("./models/registro");
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'))

const connection = async () => mongoose.connect( process.env.PRODUCTION_DNS);
connection();
// eslint-disable-next-line prettier/prettier
app.use('/', express.static(path.join(__dirname,'../dist')))


app.get('/api/lista', async (req ,res) => {
  try {
    const registros = await Registro.find();
    res.send(registros);
  } catch (e) {
    console.log(e);
  }
});
app.post('/api/lista', async(req, res)=>{
  const body = req.body;
  try {
      console.log({...req.body})
      const nuevoRegistro = new Registro({
        fecha: body.fecha,
        turno: body.turno,
        hora: body.hora,
        codigo_operario: body.codigo_operario,
        orden_fabricacion: body.orden_fabricacion,
        numero_lote: body.numero_lote,
        codigo_material:body.codigo_material,
        und_med:body.und_med,
        kg:body.kg,
        descripcion:body.descripcion,
      });
      const savedRegistro = await nuevoRegistro.save();
      console.log(savedRegistro);
      return res.send('hola')
    return  res.send('saved')
   } catch(e){
      console.log(e)
   }
})

app.listen(3000, () => console.log("we are live"));