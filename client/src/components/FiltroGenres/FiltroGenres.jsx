import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtroGenres, getGenres } from '../../redux/action'
import style from '../FiltroGenres/FiltroGenres.module.css'
export default function FiltroGenres({setPaginaActual, setOrder}){

    const dispatch =useDispatch()
    const allGenres = useSelector((state) => state.genres)
   
    useEffect(()=>{
      dispatch(getGenres())
    },[dispatch])


    const handleGender = (e) => {
      e.preventDefault()
      dispatch(filtroGenres(e.target.value))
      setPaginaActual(1)
      setOrder(`ordenado${e.target.value}`)
      e.target.value = 'default'
    }
    

  return (
    <div className={style.content}> Buscar por Genero
      <select name='select' onChange={(e)=>handleGender(e)} defaultValue="default">
      <option value='default' disabled='disabled'>Géneros</option>
        <option value='All'>Todos</option>
        {
          allGenres.map((e)=>(
            <option key={ e.name } value={ e.name }>
              {e.name}
            </option>
          ))}
      </select>
    </div>
  )
}
