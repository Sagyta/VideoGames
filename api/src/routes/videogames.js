const {Router} = require('express')
const { infoAll, /* infoApi, */ infoById, /* infoplat */} = require('../Controllers/videogames')
const {Videogame, Genre} = require('../db')
const router = Router()


/* router.get('/plat', async (req, res, next)=>{
    try {
        const plat=[]
        const plat2=[]
        const plat3=[]
        const traer= await infoplat()
        traer.data?.results.forEach(e => {
               plat.push({
                platforms: e.platforms.flatMap(e=>e.platform.name)
               })             
        });        
        plat.map(e=> e.platforms.map(e=>e))
       /*  
        console.log(plat)         
        res.send(plat)
    }catch(error){
        next(error)
    }     
}) */
//////////QUITARLO DESPUES


router.get('/', async (req, res, next)=>{
    try {
        const {name} = req.query
        let juegos= await infoAll()
        if(name){
            let juegosName= juegos.filter(e=>e.name.toLowerCase().includes(name.toLowerCase())).slice(0,15)
           
            if(juegosName) return res.send(juegosName)
            else return res.status(404).send('El Video Juego no existe')
        }else{
            let todos= juegos.map(e=>{
                return{
                    id: e.id,
                    name: e.name,
                    genres: e.genres,
                    image: e.image,
                    rating: e.rating
                }
            })
            res.send(todos)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next)=>{
    const {id} = req.params   
    try {
        const filtroId= await infoById(id)
        return res.send(filtroId)    
   } catch (error) {
        next(error)
    }
}) 

router.post('/', async (req, res, next)=>{
    const {name, description, released, rating, genres, platform} = req.body
    
    try {
        let newGame = await Videogame.create({
            name, 
            description, 
            released, 
            rating,
            platform
        })

    const addGenres= await Genre.findAll({
        where:{
            name: genres
        }
    })
         newGame.addGenre(addGenres)
        res.send(newGame)

    } catch (error) {
        next(error)
    }
}) 

module.exports = router