import { 
  CLEAR_DETALLE, 
  CLEAR_SEARCH, 
  CREATE_VIDEO, 
  FILTRO_API_DB, 
  FILTRO_GENRES, 
  GET_DETALLE, 
  GET_GENRES, 
  GET_NAME, 
  GET_VIDEOGAMES, 
  ORDEN_ABC, 
  ORDEN_RATING 
} from "../action/constantes"


const initialState={
    videogames:[],
    allVideogames:[],
    genres:[],
    createVideo:[],
    detalle: [],

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
          const genresInfo = state.allVideogames
          const filtroGenero = genresInfo.filter(video => 
            video.genres?.some(videito => videito.toLowerCase() === action.payload.toLowerCase()))
          return{
              ...state,
              videogames: action.payload === "All" ? state.allVideogames : filtroGenero
          }

        case FILTRO_API_DB:
          const allVideo= state.allVideogames
          const filtroDb= allVideo.filter(e=> typeof e.id=== 'string')
          const filtroApi= allVideo.filter(e=> typeof e.id==='number')
          return{
            ...state,
            videogames: action.payload==='all'
            ? state.allVideogames
            : action.payload === 'db'
             ?filtroDb
             : filtroApi
          }
          
        case CREATE_VIDEO:
          return{
              ...state,
              createVideo: action.payload
          }

        case ORDEN_ABC:
        let ordenABC = [...state.allVideogames]
        ordenABC = ordenABC.sort((a,b) =>{
          if(a.name.toLowerCase() < b.name.toLowerCase()) {
            return action.payload === 'asc' ? -1 : 1
          }
          if(a.name.toLowerCase() > b.name.toLowerCase()) {
            return action.payload === 'asc' ? 1 : -1
          }
          return 0
        })
        return {
          ...state,
          videogames: action.payload === 'all' ? state.allVideogames : ordenABC
        }

        case ORDEN_RATING:
          let ordenRating = [...state.videogames]
          ordenRating = ordenRating.sort((a,b) => {
            if(a.rating < b.rating) {
              return action.payload === 'rMin' ? -1 : 1
            }
            if(a.rating > b.rating) {
              return action.payload === 'rMin' ? 1 : -1
            }
            return 0
          })
            return{
            ...state,
            videogames: action.payload === 'all' ? state.allVideogames : ordenRating
          }

          case GET_DETALLE:
            return {
              ...state,
              detalle: action.payload,
            }
          
          case CLEAR_DETALLE:
            return{
              ...state,
              detalle:[],
            }
          
          case CLEAR_SEARCH:
            return{
              ...state,
              videogames:[]
            }

    default:
        return state
    }
}
export default reducer