import React, { useEffect, useState } from 'react'
import style from '../Home/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetalle, clearHome, clearSearch, getvideogames } from '../../redux/action'
import NavBar from '../NavBar/NavBar'
import Videogames from '../Videogames/Videogames'
import Paginado from '../Paginado/Paginado'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'


export default function Home(){
  const dispatch = useDispatch()
  const allVideos= useSelector((state)=>state.videogames)
 
  const [/* order */, setOrder] = useState('')
  
  useEffect(()=>{
    dispatch(getvideogames())
    return()=>{
      dispatch(clearSearch())
      dispatch(clearDetalle())
     /*  dispatch(clearHome()) */
    }
  },[dispatch])

  //////////////////////PAGINACION//////////////////////
  const [paginaActual, setPaginaActual] = useState(1)
  const [ videoByPag, /* setVideoByPag */] = useState(15)

  const indiceUltimoVideo = paginaActual * videoByPag
  const indicePrimerVideo = indiceUltimoVideo - videoByPag
  const videoActual = allVideos.slice(indicePrimerVideo, indiceUltimoVideo)

  const paginado = (pagNumero)=>{
    setPaginaActual(pagNumero)
  }
  ///////////////////FIN PAGINACION////////////////////

  return (
    <div className={style.content}>
        <NavBar setOrder={setOrder} setPaginaActual={setPaginaActual} />

            {/*///////////////////// RENDER PAGINADO///////////////// */}
          <div className={style.home}>
            <Paginado
            videoByPag={videoByPag}
            allVideos={allVideos.length}
            paginado={paginado}
            />
            {/*///////////////////FIN RENDER PAGINADO//////////////// */}
          </div>

          <div className={style.home}>
            {allVideos.length 
            ? (
            <div className={style.games}>
                  {videoActual.map(e=>{
                    return(
                      <div>
                      <div className={style.cardHome} key={e.id}>
                      <Videogames key={e.id} name={e.name} image={e.image} genres={e.genres}/>
                       <div>
                        <Link to={`/home/${e.id}/`}> 
                         <button>ver mas</button>        
                         </Link>   
                         </div>
                      </div>
                      </div>
                    )
                  })}
                                                      
                </div>
              ):(
                <div className={style.games}>
                  <div>
                    <Loading />
                  </div>
              </div>                           
            )}           
          </div>
     
{/*///////////////////// RENDER PAGINADO///////////////// */}
    <div className={style.home}>
      <Paginado
      videoByPag={videoByPag}
      allVideos={allVideos.length}
      paginado={paginado}
      />
    </div>
{/*///////////////////FIN RENDER PAGINADO//////////////// */}
     
    </div>    
  )
}