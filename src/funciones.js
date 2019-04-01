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
        intensidad:curso.intensidad
    };
    let duplicado =listaCursos.find(nom=>nom.nombre==curso.nombre);
    if(!duplicado){
    listaCursos.push(curs);
    console.log(listaCursos)
    guardar();
    } else {
        console.log('El curso ya existe!')
    }
}

const listar = ()=>{
    try{
        listaCursos=require('./listado.json')  //cuando es fijo y no cambia en el tiempo ....de forma asincronica
        // listaCursos=JSON.parse(fs.readFileSync('listado.json')) //se usa cuando es dinámico.....de forma sincronica
    } catch(error){
        listaCursos=[];
    }
}

const guardar=()=>{
    let datos=JSON.stringify(listaCursos);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err) throw (err);
        console.log('curso creado con exito!!')
    })
}


module.exports={
    crear,
    listar,
    guardar
}
