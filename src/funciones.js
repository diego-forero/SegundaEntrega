const fs=require('fs');
listaCursos=[];

// let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>(nota_uno+nota_dos+nota_tres)/3;

const crear=(curso)=>{
    listar();
    let curs={
        id:curso.id,
        nombre:curso.nombre,
        modalidad:curso.modalidad,
        valor:curso.valor,
        descripcion:curso.descripcion,
        intensidad:curso.intensidad,
        estado:curso.estado
    };
    let duplicado =listaCursos.find(nom=>nom.id==curso.id);
    if(!duplicado){
    listaCursos.push(curs);
    console.log(listaCursos)
    guardar();
    } else {
        console.log('El curso ya existe! Intente nuevamente')
    }
    return(duplicado)
}

const listar = ()=>{
    try{
        listaCursos=require('./../listado.json')  
        
    } catch(error){
        listaCursos=[];
    }
}

const guardar=()=>{
    let datos=JSON.stringify(listaCursos);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err) throw (err);
        console.log('Curso creado con exito!!')
    })
}


module.exports={
    crear,
    listar,
    guardar
}
