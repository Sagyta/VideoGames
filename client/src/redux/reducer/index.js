import { CREATE_VIDEO, FILTRO_API_DB, FILTRO_GENRES, GET_GENRES, GET_NAME, GET_VIDEOGAMES, ORDEN_ABC, ORDEN_RATING } from "../action/constantes"


const initialState={
    videogames:[],
    allVideogames:[],
    genres:[],
}


function reducer (state= initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload, //numca cambia
                allVideogames: action.payload //va cambiando
            }
        
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }

        case GET_NAME:
            return{
                ...state,
                videogames: action.payload
            }
        
        case FILTRO_GENRES:
            const genresInfo = state.videogames
            const infoGenres = 
            action.payload === 'All'
            ? genresInfo
            : genresInfo.filter((e)=>
            e.genres.find((e)=>e.name === action.payload))
            return{
                ...state,
                videogames: infoGenres
            }
        
        case FILTRO_API_DB:
            const allVideos = state.allVideogames
            const creadosDB= action.payload === 'api'
            ? state.allVideogames.filter(e=> typeof e.id === 'number')
            : state.allVideogames.filter(e=> typeof e.id === 'string')
            console.log(creadosDB)
            return{
                ...state,
                videogames:action.payload === 'all' ? state.allVideogames : creadosDB
            }
        
        case CREATE_VIDEO:
            return{
                ...state,
                videogames:[...state.videogames, action.payload]
            }

        case ORDEN_ABC:
            let ordenAsc= action.payload === 'asc'
            ? state.allVideogames.sort((a, b)=>{
                if(a.name > b.name){
                    return 1
                }
                if(b.name > a.name){
                    return -1
                }
                return 0
            })
            : state.allVideogames.sort((a, b)=>{
                if(a.name > b.name){
                    return -1
                }
                if( b.name > a.name){
                    return 1
                }
                return 0
            })
            console.log(ordenAsc)
            return{
                ...state,
                allVideos: action.payload === 'all' ? state.videogames : ordenAsc
            }

        case ORDEN_RATING:
            let ordenRating = action.payload === 'rMin'
            ? state.videogames.sort((a,b)=>{
                if(a.rating > b.rating){
                    return 1
                }
                if(b.rating > a.rating){
                    return -1
                }
                return 0
            })
            : state.videogames.sort((a,b)=>{
                if(a.rating > b.rating){
                    return -1
                }
                if(b.rating > a.rating){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                videogames: ordenRating
            }

    default:
        return state
    }
}
export default reducer