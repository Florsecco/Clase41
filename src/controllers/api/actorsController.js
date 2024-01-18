
const db = require('../../database/models');
const sequelize = db.sequelize;


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Actors = db.Actor;



const actorsController = {
    list: async(req, res) => {
        try{
            const actors = await Actors.findAll()
            return res.status(200).json({
                meta:{
                    status: 200,
                    total: actors.length,
                    url: "api/actors"
                },
                data: actors                
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    },
    detail: async(req, res) => {
        try{
            const actor = await Actors.findByPk(req.params.id)
            return res.status(200).json({
                data: actor,
                status: 200
            })
        } catch (err){
            console.log(err)
            res.send(err)
        }
    },
    create: async function (req,res) {
        try{
            const actor = await Actors.create(req.body)
            return res.json(actor) 
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    },
    destroy: async function (req,res) {
        try{
        let actorId = req.params.id;
        const actorDelete= await Actors.findByPk(actorId)
        if(actorDelete){
        await actorDelete.destroy();
        return res.json(actorDelete)
        }
         // force: true es para asegurar que se ejecute la acción
        }
        catch(err){
            console.log(err);
            res.send(err) 
        }
    }
}

module.exports = actorsController