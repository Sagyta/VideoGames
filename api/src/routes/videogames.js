const {Router} = require('express')
const { infoAll, infoById} = require('../Controllers/videogames')
const {Videogame, Genre} = require('../db')
const router = Router()

router.get('/', async (req, res, next)=>{
    try {
        const {name} = req.query
        let juegos= await infoAll()
        if(name){
            let juegosName= juegos.filter(e=>e.name.toLowerCase().includes(name.toLowerCase())).slice(0,15)
           
            if(juegosName.length)  res.send(juegosName)
            else  res.status(404).send('El Video Juego no existe')
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

router.put('/:id', async (req, res, next)=>{
    const {id} = req.params
    const {name, description, rating, released, platform} = req.body
    try {
        let updateVideo= await Videogame.findOne({
            where:{
                id: id,
            },
            include:{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes:[]
                }}
        });
        await updateVideo.update({
            name,
            description,
            rating,
            released,
            platform
        });
        let genDb= await Genre.findAll({
            where:{
                name:{
                    [Op.in]: req.body.genres,
                },
            },
        });
        await updateVideo.setGenres(genDb);
        res.send(updateVideo)
    } catch (error) {
        next(error)
    }    
})

router.delete('/:id', async (req,res,next)=>{
    const {id} = req.params
    try {
    const videoDelete= await Videogame.findByPk(id,{
        include:{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes:[]
            }}
    })
    if(videoDelete){
        await videoDelete.destroy();
        return res.send('Videojuego eliminado!')
    }
    res.status(404).send('Videojuego no encontrado')
   } catch (error) {
       next(error)
   }
})


module.exports = router