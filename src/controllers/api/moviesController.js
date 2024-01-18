const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;



const moviesController = {
    list: async(req, res) => {
        try{
            const movies = await db.Movie.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: movies.length,
                    url: "api/movies"
                },
                data: movies                
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    },
    detail: async(req, res) => {
        try{
            const movie = await db.Movie.findByPk(req.params.id)
            return res.status(200).json({
                data: movie,
                status: 200
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    },
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
        if(movieDelete){
        await movieDelete.destroy();
        return res.json(movieDelete)
        }
         // force: true es para asegurar que se ejecute la acción
        }
        catch(err){
            console.log(err);
            res.send(err) 
        }
    }
}

module.exports = moviesController;