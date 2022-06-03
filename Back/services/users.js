exports.obtenerUsuarios = () => {
    return [{'ID':1,'Nombre':'Paul'},{'ID':2,'Nombre':'Alice'}]
}

exports.obtenerDetalleUsuario = (id) => {
    //Genero error para probar endware con error de servidor
        // const a=null;
        // const b=a.length;
    // fin de prueba de error de endware

    return {'ID':id,'Nombre':'Paul','Edad':27}
}