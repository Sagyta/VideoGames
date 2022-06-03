import React from 'react'
import style from './OrdenABC.module.css'
import { useDispatch } from 'react-redux'
import {  ordenABC } from '../../redux/action'


export default function OrdenABC({setPaginaActual, setOrder}){
    const dispatch = useDispatch()
    

    function handleOrdenABC(e){
      e.preventDefault()
      dispatch(ordenABC(e.target.value))
      setPaginaActual(1);
      setOrder(`ordenado${e.target.value}`)
    }

  return (
    <div className={style.algo}>Ordenar Asc/Desc
      <select name='select' onChange={e=>{handleOrdenABC(e)}}>
        <option value='all'>Todos</option>
        <option value='asc'>A - Z</option>  
        <option value='desc'>Z - A</option>                     
      </select>
    </div>
  )
}
