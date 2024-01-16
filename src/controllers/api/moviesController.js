const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;



const moviesController = {
    create: async function (req,res) {
        try{
            await Movies.create(req.body)
            return res.send("movie creada") 
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    },
    destroy: async function (req,res) {
        try{
        let movieId = req.params.id;
         await Movies.destroy({where: {id: movieId}, force: true}) 
         return res.send('pelicula eliminada')
         // force: true es para asegurar que se ejecute la acción
        }
        catch(err){
            console.log(err);
            res.send(err) 
        }
    }
}

module.exports = moviesController;