exports.obtenerUsuarios = () => {
    //Ejecutar logica del negocio
    return [{'ID':1,'Nombre':'Paul'},{'ID':2,'Nombre':'Alice'}]
}

exports.obtenerDetalleUsuario = (id) => {
    //Ejecutar logica del negocio
    //Genero error para probar endware con error de servidor
        // const a=null;
        // const b=a.length;
    // fin de prueba de error de endware

    return {'ID':id,'Nombre':'Paul','Edad':27}
}