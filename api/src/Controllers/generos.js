const axios = require('axios')
const {APIKEY} = process.env
const URL= 'https://api.rawg.io/api/genres'

const infoGeneros= async()=>{
    const picar= await axios.get(`${URL}?key=${APIKEY}`)
    const data= picar.data.results
    console.log(data)
    return data
}

module.exports={
    infoGeneros,
}