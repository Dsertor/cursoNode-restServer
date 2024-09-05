
const express = require('express')
var cors = require('cors')

class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'; 

        //Middlares -> Son funciones que van a añadirle otra funcionalidad a mi web server
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes()
    }   

    middlewares(){
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())


        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Proceso corriendo en el puerto ',this.port);
            
        })
    }

}


module.exports = Server;