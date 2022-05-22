const axios = require('axios')
require('dotenv').config()
const {APIKEY} = process.env
const URL= 'https://api.rawg.io/api/games'
const {Videogame, Genre} = require ('../db')

const infoApi= async ()=>{
    const games= []
    let url= `${URL}?key=${APIKEY}`

    for (let i = 1; i < 6; i++) {
        let pages = await axios.get(url)
        pages.data?.results.forEach((e)=>{
            games.push({
                id: e.id,
                name: e.name,
                released: e.released,
                rating: e.rating,
                image: e.background_image,
                platforms: e.platforms.map(e=>e.platform.name),
                genres: e.genres.map(e=>e.name),
            })
        })
        url= pages.data.next
    }
    return games
}

const infoDb= async()=>{
     const algo1= await Videogame.findAll({
        include:{
            model: Genre,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    }) 
    const algo= await algo1.map(e=>({
              id: e.id,
              name: e.name,
              description: e.description,
              released: e.released,
              rating: e.rating,
              platforms: e.platforms,
              genres: e.genres.map(e=>e.name)
          })) 
          return algo
}

const infoAll = async ()=>{
    const api= await infoApi()
    const db= await infoDb()
    const infoTotal= [...api, ...db]
    return infoTotal
}

const infoById = async(id)=>{
    if(typeof id === 'string' && id.length>8){
        const infoIdDb= await Videogame.findByPk(id,{
            include:{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes:[]
                }}
            })
            return infoIdDb  
        }else{
            const infoIdApi= await axios.get(`${URL}/${id}?key=${APIKEY}`)
            const e = infoIdApi.data
            const info= {
                id:e.id,
                name: e.name,
                image: e.background_image,
                description: e.description,
                released: e.released,
                rating: e.rating,
                platform: e.platforms.map(e=>e.platform.name),
                genres: e.genres.map(e=>e.name)
            }
    return info
        }
}

/* const infoByIdApi = async(id)=>{
    


    const infoIdApi= await axios.get(`${URL}/${id}?key=${APIKEY}`)
    const e = infoIdApi.data
    const info= {
        id:e.id,
        name: e.name,
        image: e.background_image,
        description: e.description,
        released: e.released,
        rating: e.rating,
        platform: e.platforms.map(e=>e.platform.name),
        genres: e.genres.map(e=>e.name)
    }
    return info
}

const infoByIdDb = async()=>{
    const infoIdDb= await Videogame.findAll({
        include:{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes:[]
            }
        }
    })
     const algo= await infoIdDb.map(e=>({
        id: e.id,
        name: e.name,
        description: e.description,
        released: e.released,
        rating: e.rating,
        platforms: e.platforms,
        genres: e.genres.map(e=>e.name)
   }))
        return algo    
} */

module.exports={
    infoApi,
    infoDb,
    infoAll,
   // infoByIdApi,
   // infoByIdDb,
    infoById
}