import React from 'react'
import { ordenRating } from '../../redux/action'
import style from '../OrdenRating/OrdenRating.module.css'
import { useDispatch } from 'react-redux'

export default function OrdenRating({setPaginaActual, setOrder}){

  const dispatch= useDispatch()

  function handleOrdenFuerza(e){
    e.preventDefault()
    dispatch(ordenRating(e.target.value))
    setPaginaActual(1);
    setOrder(`ordenado${e.target.value}`)
  }

  return (
    <div className={style.algo}>Clasificación
      <select name='select' onChange={e=>{handleOrdenFuerza(e)}}>
          <option value='all'>Todos</option>
          <option value='rMin'>Rating min</option>  
          <option value='rMax'>Rating max</option>                     
      </select>
    </div>
  )
}
