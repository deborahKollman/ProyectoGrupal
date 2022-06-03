const {obtenerUsuarios , obtenerDetalleUsuario} = require('../services/users.js')

exports.getUsers = (req,res,next) => {
    //Ejecutar logica del negocio
    try {
        const r = obtenerUsuarios()
        res.json(r)
    }
    catch (error) {
        next(error)        
    }
}

exports.getUserDetail = (req,res,next) => {
    try {
        const {id} = req.params;
        const r = obtenerDetalleUsuario(id)
        //Genero error para probar endware con error de servidor
            //r='algo';
        // fin de prueba de error de endware

        res.json(r)
    }
    catch (error) {
        next(error)
    }
}


