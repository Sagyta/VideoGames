import React, { useEffect } from 'react'
import style from '../FiltroGames/FiltroGames.module.css'
import { useDispatch, /* useSelector */ } from 'react-redux'
import { filtroCreadosApi } from '../../redux/action'

export default function FiltroGames(){
  const dispatch = useDispatch()
  // const allVideos= useSelector((state) => state.videogames)

  useEffect(() => {
    dispatch(filtroCreadosApi())
  }, [dispatch])
  
  function handleFiltroCreados(e){
    e.preventDefault();
    dispatch(filtroCreadosApi(e.target.value));
  }

  return (
    <div className={style.algo}> Api / Creados     
        <select name='select' onChange={e=>{handleFiltroCreados(e)}}>
            <option value='all'>Video Games</option>
            <option value='api'>Existentes</option>  
            <option value='db'>Creados</option>                     
        </select>

    </div>
  )
}
