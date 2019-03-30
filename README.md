#Segundo proyecto

----<HEADER>----------
IMAGEN BOOTSTRAP
MENU
1 Inicio
2 Crear Curso
3 Ver Curso
4 Inscribir
5 Ver Inscritos

----<BODY>----------
<!-- OPCION 1 INICIO -->
1. localhost:3000/
    <!-- MUESTRA EL HEADER EN EL BODY UN MENU ESTANDAR CON IMAGEN BOOTSRAP Y EL FOOTER -->
        IMAGEN BOOTSRAP

<!-- OPCION 2 CREAR CURSO -->
2. localhost:3000/crear
    <!-- MUESTRA UN FORMULARIO CON LOS DATOS ID*,NOMBRE*,VALOR*,DESCRIPCION*,MODALIDAD(virtual o presencial), INTENSIDAD HORARIA///////* SIGNIFICA QUE SON OBLIGATORIOS -->

    <HEADER>
    ------------------------------------------------------
    --------
    TITULO DE FORMULATIO: INGRESE INFORMACION DEL CURSO
    ------

    ID: <!-- PUEDE SER UN DESPLEGABLE DE NUMEROS -->
    NOMBRE: <!-- ABIERTO DE TEXTO CORTO -->
    DESCRIPCION: <!-- ABIERTO DE TEXTO LARGO -->
    VALOR: <!-- RESTRICCION DE NUMEROS -->
    MODALIDAD: <!-- DESPLEGABLE CON OPCIONES -->
        -"Virtual"
        -"Presencial"
    INTENSIDAD HORARIA: <!-- RESTRICCION DE NUMEROS -->

    ESTADO: DISPONIBLE/CERRADO <!-- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡CAMPO OCULTO!!!!!!!!!!!1 -->
    <!-- CAMPO ESTADO POR DEFECTO DISPONIBLE!!!!!!!!!!!!!!!!1 -->

    <[BUTTON]><!-- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ME CAMBIA VISTA A CURSO CREADO CON EXITO EN EL QUE SE VEA TABLA CON LISTADO DE CURSOS  !!!!!!!!!!!!!!!!1 -->:

    <!-- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡TENER CUIDADO!!!!!!!!!!!!!!!!1 -->
    la primera vez que se muestra el listado si no se ha creado el archivo .json se va a mostrar un error porque es mas rapido mostrar el listado que crear el archivo entonces como es acon asincronismo no va a esperar a crear el archivo para msotrar el listado
    <!-- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡TENER CUIDADO!!!!!!!!!!!!!!!!1 -->


    
    ------------------------------------------------------

    <FOOTER>

<!-- OPCION 3 VER LISTADO DE CURSOS COMO ADMINISTRADOR -->
3. localhost:3000/ver
    <!-- MUESTRA EL LISTADO EN UN FORMATO AMIGABLE DE TAL MANERA QUE SE PUEDA VER EL CURSO CON SUS DETALLES Y ACTUALIZAR EL ESTADO DE UN CURSO SELECCIONADO -->


    <HEADER>
    ------------------------------------------------------

    <!-- PENSAR EN MANERA PARA SELECCIONAR CURSO Y VER DETALLES-->
    --------
    TITULO DE VER CURSOS
    ------

    [OBJETO CON EL LISTADO DE LOS CURSOS]

    ------
    <!-- OPCION DE EDICION DE ESTADO-->
    [LISTA DESPLEGABLE CON SELECCION DE CURSOS]
    [LISTA CON OPCIONES DE ESTADO]
    [BOTON]<!-- BOTON DE CONFIRMACION DE CAMBIO DE ESTADO-->

    
    ------------------------------------------------------

    <FOOTER>

<!-- OPCION 4 VER LISTADO DE CURSOS COMO ADMINISTRADOR -->
4. localhost:3000/inscribir
    <!-- FORMULARIO PARA INSCRIPCON DE ESTUDIANTE A CURSO-->


