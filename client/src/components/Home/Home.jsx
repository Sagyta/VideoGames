import React, { useEffect, useState } from 'react'
import style from '../Home/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getvideogames } from '../../redux/action'
import NavBar from '../NavBar/NavBar'
import Videogames from '../Videogames/Videogames'
import Paginado from '../Paginado/Paginado'


export default function Home(){
  const dispatch = useDispatch()
  const allVideos= useSelector((state)=>state.videogames)
  
  useEffect(()=>{
    dispatch(getvideogames())
  },[dispatch])

  //////////////////////PAGINACION//////////////////////
  const [paginaActual, setPaginaActual] = useState(1)
  const [ videoByPag, setVideoByPag] = useState(15)

  const indiceUltimoVideo = paginaActual * videoByPag
  const indicePrimerVideo = indiceUltimoVideo - videoByPag
  const videoActual = allVideos.slice(indicePrimerVideo, indiceUltimoVideo)

  const paginado = (pagNumero)=>{
    setPaginaActual(pagNumero)
  }
  ////////////////////FIN PAGINACION////////////////////

  return (
    <div>
      <NavBar />

      {/*///////////////////// RENDER PAGINADO///////////////// */}
      <Paginado
      videoByPag={videoByPag}
      allVideos={allVideos.length}
      paginado={paginado}
      />
      {/*///////////////////FIN RENDER PAGINADO//////////////// */}
      <div className={style.home}>
      
        <div className={style.games}>
          {
            videoActual?.map((e)=>{
              return(
                <Videogames key={e.id} name={e.name} image={e.image} genres={e.genres}/>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}
