const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const bodyParser = require ('body-parser')
helpers= require('./helpers/helpers')
const funciones = require ('./funciones')

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));


const directorioviews=path.join(__dirname,'../template/views')


app.set('views', directorioviews );

const directoriopublico=path.join(__dirname,'../public')

const directoriopartials=path.join(__dirname,'../template/partials')
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials)
app.use(bodyParser.urlencoded({extended:false}))


app.set('view engine','hbs')

app.get(['/','/index'],(req,res)=>{
    
    res.render('index',{
        estudiante: 'Diego'
    })
})

app.get('/crear',(req,res)=>{
    
    res.render('crear',{
        estudiante: 'Diego'
    })
})

app.post('/creacion',(req,res)=>{
    
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

app.get('/listar',(req,res)=>{
    res.render('listar',{

    })
})



app.listen(3002,()=>{
    console.log('Escuchando en el puerto 3002')
})