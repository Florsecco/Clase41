const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;



const moviesController = {
    create: async function (req,res) {
        try{
            const movie = await Movies.create(req.body)
            return res.json(movie) 
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    },
    destroy: async function (req,res) {
        try{
        let movieId = req.params.id;
        const movieDelete= await Movies.findByPk(movieId)
        await Movies.destroy({where: {id: movieId}, force: true}) 
        return res.json(movieDelete)
         // force: true es para asegurar que se ejecute la acción
        }
        catch(err){
            console.log(err);
            res.send(err) 
        }
    }
}

module.exports = moviesController;