const {Router} = require('express')
const {Genre} = require('../db')
const router = Router()
const { infoGeneros } = require('../Controllers/generos')


router.get('/', async (req, res, next)=>{
    try {
        const traer= await infoGeneros()
        const generosDb= await Genre.findAll()
        if(!generosDb.length){
            const map= traer.map(e=>({
                id: e.id,
                name: e.name
            }))
            const guardar= await Genre.bulkCreate(map)
            res.send(guardar)
        }else{
            const filtroDb= generosDb.map(e=>{
                return{
                    id: e.id,
                    name: e.name
                }
            })
            res.send(filtroDb)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router