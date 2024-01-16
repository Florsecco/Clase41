const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list: async(req, res) => {
        try{
            const genres = await db.Genre.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: genres.length,
                    url: "api/genres"
                },
                data: genres                
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    },
    detail: async(req, res) => {
        try{
            const genre = await db.Genre.findByPk(req.params.id)
            return res.status(200).json({
                data: genre,
                status: 200
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    }
    
}

module.exports = genresController;