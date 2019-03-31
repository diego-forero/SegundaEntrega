const hbs=require('hbs');

// hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3)=>{
//     return (nota1+nota2+nota3)/3;
// });

hbs.registerHelper('listar',()=>{
    listaCursos=require('./../listado.json')
    let texto =
    '<table style="text-align:center;">\
        <thead>\
            <th>Id</th>\
            <th>Nombre</th>\
            <th>Modalidad</th>\
            <th>Valor</th>\
            <th>Descripcion</th>\
            <th>Intensidad</th>\
        </thead>\
    <tbody>'


    listaCursos.forEach(estudiante => {texto=
        texto+
        '<tr>'+
        '<td>'+estudiante.nombre+'</td>'+
        '<td>'+estudiante.matematicas+'</td>'+
        '<td>'+estudiante.ingles+'</td>'+
        '<td>'+estudiante.programacion+'</td>'+
        '</tr>';
    });
    texto=texto+'</tbody></table>'
    


    // ' Lista de Esstudi4ntes'+' <br> ';
    // listaCursos.forEach(estudiante => {
    //     texto=texto+
    //         "Nombre: "+estudiante.nombre +'<br>'+
    //         "Matemáticas: "+estudiante.matematicas+'<br>'+
    //         "Ingles: "+estudiante.ingles+'<br>'+
    //         "Programacion: "+estudiante.programacion+'<br>'
    // })
    return(texto);
})//en este caso nor equiere arg de entrada porque se va a calcular automaticamente con lo que se tenga en el json