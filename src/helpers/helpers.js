const hbs=require('hbs');

hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3)=>{
    return (nota1+nota2+nota3)/3;
});

hbs.registerHelper('listar',()=>{
    listaEstudiantes=require('./../listado.json')
    let texto =
    '<table style="text-align:center;">\
        <thead>\
            <th>Nombre</th>\
            <th>Matemáticas</th>\
            <th>Inglés</th>\
            <th>Programación</th>\
        </thead>\
    <tbody>'

    listaEstudiantes.forEach(estudiante => {texto=
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
    // listaEstudiantes.forEach(estudiante => {
    //     texto=texto+
    //         "Nombre: "+estudiante.nombre +'<br>'+
    //         "Matemáticas: "+estudiante.matematicas+'<br>'+
    //         "Ingles: "+estudiante.ingles+'<br>'+
    //         "Programacion: "+estudiante.programacion+'<br>'
    // })
    return(texto);
})//en este caso nor equiere arg de entrada porque se va a calcular automaticamente con lo que se tenga en el json