const express = require('express');
const path = require('path');

const app = express()
const port = 3030

/* Archivos estaticos */
app.use(express.static(path.resolve(__dirname,'public')))


/* Rutas */
app.get('/',(req,res) => res.send("Bienvenidos!"));

app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
})