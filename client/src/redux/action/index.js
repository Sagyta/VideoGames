import axios from 'axios'
import { GET_DETALLE, /* CREATE_VIDEO, */ FILTRO_API_DB, FILTRO_GENRES, GET_GENRES, GET_NAME, GET_VIDEOGAMES, ORDEN_ABC, ORDEN_RATING, CLEAR } from './constantes'


export function getvideogames(){
    return async function (dispatch){
        try {
            let videogames= await axios.get('http://localhost:3001/videogames')
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: videogames.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getName(name){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
                type: GET_NAME,
                payload: json.data
            })
        } catch (error) {
            alert('Ese Video Juego no existe')
            console.log(error)
        }
    }
}

export function getGenres(){
  return async (dispatch)=>{
    try {
      let infogenres = await axios.get('http://localhost:3001/generos')
      return dispatch({
          type: GET_GENRES,
          payload: infogenres.data
          // payload: infogenres.data.map(genero => genero.name)
      })
    } catch (error) {
        console.log(error)
    }
  }
}

export function filtroGenres(payload){
    return{
        type: FILTRO_GENRES,
        payload
    }
}
export function filtroCreadosApi(payload){
    return{
        type: FILTRO_API_DB,
        payload
    }
}
export function crearVideoGames(game){
    return async function(){
        const crear= axios.post(`http://localhost:3001/videogames`, game)
        return crear.data
    }
}
/* export function crearVideoGames(game){
    return async function(dispatch){
        const crear= await axios.post('http://localhost:3001/videogames', game)
        game= crear.data
        dispatch({
            type: CREATE_VIDEO,
            payload: game
        })//
    }
} */
export function ordenABC(payload){
    return{
        type: ORDEN_ABC,
        payload
    }
}

export function ordenRating(payload){
    return{
        type: ORDEN_RATING,
        payload
    }
}

export function getDetalle(id){
    return async function(dispatch){
        try {
            const detail= await axios.get(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: GET_DETALLE,
                payload: detail.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function clear(payload){
    return{
        type: CLEAR,
        payload
    }
}

/* export function getDetalle(payload) {
  return async function(dispatch){
    var detail = await axios.get(`http://localhost:3001/videogames/${payload}`)
    dispatch({
      type: GET_DETALLE,
      payload: detail.data
    })
  }
} */