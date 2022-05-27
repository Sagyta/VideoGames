import React, { useEffect, useState } from 'react'
import style from './OrdenABC.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getvideogames, ordenABC } from '../../redux/action'


export default function OrdenABC(){
    const dispatch = useDispatch()
    const allVideogames= useSelector((state)=>state.videogames)

    /* useEffect(()=>{
      dispatch(getvideogames())
    },[dispatch]) */
    
    const [orden, setOrden] = useState('')
    function handleOrdenABC(e){
      e.preventDefault()
      dispatch(ordenABC(e.target.value))
     /*  */ setOrden(`orden ${e.target.value}`)
    }
  return (
    <div className={style.algo}>Ordenar Asc/Desc
        <select onClick={e=>{handleOrdenABC(e)}}>
            <option value='all'>Todos</option>
            <option value='asc'>A - Z</option>  
            <option value='desc'>Z - A</option>                     
        </select>
    </div>
  )
}
