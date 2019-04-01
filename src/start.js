const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const bodyParser = require ('body-parser')
helpers= require('./helpers/helpers')
const funciones = require ('./funciones')


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

app.get('/crear',(req,res)=>{
    // res.send('RESPUESTA DESDE INDEX');
    res.render('crear',{
        estudiante: 'Diego'
    })
})

app.post('/creacion',(req,res)=>{
    // res.send('RESPUESTA DESDE CALCULOS');
    res.render('creacion',{
        id: parseInt(req.body.idfield),
        nombre: req.body.coursename,
        descripcion: req.body.coursedesc,
        valor: parseInt(req.body.courseprice),
        modalidad: req.body.coursemodalidad,
        intensidad: parseInt(req.body.courseintensidad),
        estado: req.body.courseestado
    });

    const curso ={
        id: req.body.idfield,
        nombre: req.body.coursename,
        descripcion: req.body.coursedesc,
        valor: req.body.courseprice,
        intensidad: req.body.courseintensidad,
        modalidad: req.body.coursemodalidad,
        estado: req.body.courseestado
    }
    
    console.log(curso)
    funciones.crear(curso)

})




app.listen(3002,()=>{
    console.log('Escuchando en el puerto 3002')
})