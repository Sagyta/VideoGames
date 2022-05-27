import React from 'react'
import style from '../FiltroGames/FiltroGames.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filtroCreadosApi } from '../../redux/action'


export default function FiltroGames(){
  const dispatch = useDispatch()
  const allVideos= useSelector((state)=>state.videogames)

  function handleFiltroCreados(e){
    dispatch(filtroCreadosApi(e.target.value))
  }
  return (
    <div className={style.algo}> Api / Creados     
        <select onClick={e=>{handleFiltroCreados(e)}}>
            <option value='all'>Video Games</option>
            <option value='api'>Existentes</option>  
            <option value='db'>Creados</option>                     
        </select>

    </div>
  )
}
