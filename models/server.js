const express = require('express');
const cors = require('cors');

class Server(){

    constructor(){
        this.port = process.env.PORT || 3000;
        
        this.app = express();

        //1° en Orden
        this.middleware();
        
        //2° en orden
        this.routers();
    }

    middleware(){
        
        //probar regla de restriccion
        this.app.use(cors());
        //una vez configurada esta seccion publica, NO es posible usar esta ruta
        this.app.use(express.static('public'));
    
    }


    routers(){
        /*
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
          });
        */

       /*
        this.app.use('/api/v1', require('../routes/demo'), function (req, res) {
            res.send('uadhsaldsada');
        });  
         */
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(` app listening/escuchando on port ${this.port}`);
        });        
    }

}

module.exports = Server;