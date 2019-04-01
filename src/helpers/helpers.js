const hbs=require('hbs');

hbs.registerHelper('resultadoDeCreacion',()=>{
    const funciones=require('./../funciones')
    if(!funciones.crear){
        resultado='Curso creado con éxito!'
    } else {
        resultado='Curso ya existe!'+'<br> Intente nuevamente'
    }
    return(resultado)
})

hbs.registerHelper('listar',()=>{
    listaCursos=require('./../../listado.json')
    let texto = "<table class='table table-striped table-hover'> \
        <thead class='thead-dark'> \
            <th scope='col'>Id</th> \
            <th scope='col'>Nombre</th> \
            <th scope='col'>Descripcion</th> \
            <th scope='col'>Valor</th> \
            <th scope='col'>Modalidad</th> \
            <th scope='col'>Intensidad</th> \
            <th scope='col'>Estado</th> \
        </thead> \
    <tbody>";


    listaCursos.forEach(curso => {texto=
        texto+
         "<tr> "+
        '<td>'+curso.id+'</td>'+
        '<td>'+curso.nombre+'</td>'+
        '<td>'+curso.descripcion+'</td>'+
        '<td>'+curso.valor+'</td>'+
        '<td>'+curso.modalidad+'</td>'+
        '<td>'+curso.intensidad+'</td>'+
        '<td>'+curso.estado+'</td>'+
        '</tr>';
    })
    texto=texto+'</tbody></table>';

    return texto;
})