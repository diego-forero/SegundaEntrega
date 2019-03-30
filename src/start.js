const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const bodyParser = require ('body-parser')
require('./helpers/helpers')

const directorioviews=path.join(__dirname,'../template/views')

// app.set("views",)
app.set('views', directorioviews );
//__dirname=C:\Users\Diego Forero\Desktop\DIPLOMADO NODE\bootstrap\src
//directoriopublico=C:\Users\Diego Forero\Desktop\DIPLOMADO NODE\bootstrap\public
//directoriopartials=C:\Users\Diego Forero\Desktop\DIPLOMADO NODE\bootstrap\template


// app.use('views', path.join(__dirname, '../template/'));


// const test=path.join(path,'')
const directoriopublico=path.join(__dirname,'../public')
// const directoriopartials=path.join(__dirname,'../partials')
const directoriopartials=path.join(__dirname,'../template/partials')
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials)
app.use(bodyParser.urlencoded({extended:false}))


app.set('view engine','hbs')

app.get(['/','/index'],(req,res)=>{
    // res.send('RESPUESTA DESDE INDEX');
    res.render('index',{
        estudiante: 'Diego'
    })
})




app.listen(3002,()=>{
    console.log('Escuchando en el puerto 3001')
})


