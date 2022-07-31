import React, { useEffect } from 'react'
import style from '../FiltroGames/FiltroGames.module.css'
import { useDispatch } from 'react-redux'
import { filtroCreadosApi, getvideogames } from '../../redux/action'

export default function FiltroGames({setPaginaActual, setOrder}){
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getvideogames())
  }, [dispatch])
  
  function handleFiltroCreados(e){
    e.preventDefault();
    dispatch(filtroCreadosApi(e.target.value));
    setPaginaActual(1);
    setOrder(`ordenado${e.target.value}`)
    e.target.value = 'default'
  }

  return (
    <div>      
      
    <div className={style.content}> Api/Creados    
        <select name='select' onChange={e=>{handleFiltroCreados(e)}} defaultValue="default">
            <option value='default' disabled='disabled'>Video Games</option>
            <option value='all'>Todos</option>
            <option value='api'>Existentes</option>  
            <option value='db'>Creados</option>                     
        </select>
    </div>

    </div>
  )
}
