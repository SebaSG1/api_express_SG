const axios = require('axios');             
const {request, response} = require('express');

const getPeliculas = (req = request, res = response) => {
    
    const queryParam = req.query;
    //console.log(queryParam); //esto trae todo lo de la url
    const {anio, ...resto} = req.query;
    console.log(req.query);
    console.log("año " + anio);
    console.log(resto);
    res.status(200).json({name : `Peliculas del año ${anio}`}); //respuestas .status.json
  
}

const getPelicula = (req = require, res = response) =>{
    //res.send('<h1>asdsd</h1>');
    const {id} = req.params;
    res.json({name: `pelicula con id ${id}`}) //templates literales usa backticks
    console.log(`input user: ${id}`);
}
  
const getClasicos = (req = require, res = response) =>{
    res.json({name:'clasicos'});
}

const getEstrenos = (req = require, res = response) =>{
    res.json({name:'estrenos'});
}

const getNombreOrigen = (req = require, res = response) =>{
    console.log(req.params);
    const {name} = req.params
    
    axios.get(`https://api.nationalize.io/?name=${name}`)
    .then(({status, data, statusText}) => {
        console.log(status, data, statusText);
        // handle success
        res.status(200).json({
            status, //si clave y objeto tienen el mismo valor, se pone solo la clave
            data,
            statusText,            
            name
        });
        
    })
    .catch((error) => {
        // handle error
        console.log(error);
        res.status(401).json({
            status: 400, 
            msg: 'Error cito'});
    });
    
    
}

    module.exports = {
        getPeliculas,
        getPelicula,
        getClasicos,
        getEstrenos,
        getNombreOrigen
    };