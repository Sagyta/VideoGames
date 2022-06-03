import React, { useEffect } from 'react'
import style from '../FiltroGames/FiltroGames.module.css'
import { useDispatch } from 'react-redux'
import { filtroCreadosApi } from '../../redux/action'

export default function FiltroGames({setPaginaActual, setOrder}){
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(filtroCreadosApi())
  }, [dispatch])
  
  function handleFiltroCreados(e){
    e.preventDefault();
    dispatch(filtroCreadosApi(e.target.value));
    setPaginaActual(1);
    setOrder(`ordenado${e.target.value}`)
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
