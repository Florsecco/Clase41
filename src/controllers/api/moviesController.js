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
    destroy: function (req,res) {
        return res.send('destroy')
        // let movieId = req.params.id;
        // Movies
        // .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        // .then(()=>{
        //     return res.redirect('/movies')})
        // .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;