const express = require('express');
const cors = require('cors')
class Server{
    
    constructor(){    
        this.port = process.env.PORT || 3000;
        this.api = process.env.API_KEY;

        this.app = express();
        
        // 1° en Orden
        this.middleware();
        // 2° en Orden
        this.routers();


    }

    middleware(){
        //Probar alguna regla de restricción
        this.app.use(cors());
        
        //Una vez que se configura esta sección publica, NO 
        //es posible utilizar
        this.app.use(express.static('public'));
    }

    routers(){
        /* this.app.get('/', function (req, res) {
            res.send('Home');
        }); */

        this.app.use('/api/v1', require('../routes/peliculas'));

        this.app.all('*', (req, res) => {
            res.status(404).json({message:'404 Page Not Found'})
        })
    }


    listen(){
        this.app.listen(this.port, () =>{    
            console.log(`App escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;