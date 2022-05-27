import React, { useState } from 'react'
import { ordenRating } from '../../redux/action'
import style from '../OrdenRating/OrdenRating.module.css'
import { useDispatch } from 'react-redux'


export default function OrdenRating(){

  const dispatch= useDispatch()

  const [orden, setOrden] = useState('')

  function handleOrdenFuerza(e){
    e.preventDefault()
    dispatch(ordenRating(e.target.value))
    setOrden(`orden ${e.target.value}`)
}

  return (
    <div className={style.algo}>Clasificación
        <select onClick={e=>{handleOrdenFuerza(e)}}>
            <option value='all'>Todos</option>
            <option value='rMin'>Rating min</option>  
            <option value='rMax'>Rating max</option>                     
        </select>
    </div>
  )
}
