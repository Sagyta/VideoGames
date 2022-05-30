import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtroGenres, getGenres } from '../../redux/action'
import style from '../FiltroGenres/FiltroGenres.module.css'


export default function FiltroGenres(){

    const dispatch =useDispatch()
    const allGenres = useSelector((state) => state.genres)
   
    useEffect(()=>{
      // dispatch(getvideogames())
      dispatch(getGenres())
    },[dispatch])


    const handleGender = (e) => {
      e.preventDefault()
      dispatch(filtroGenres(e.target.value))
    }

  return (
    <div className={style.algo}> Buscar por Genero
      <select name='select' onChange={(e)=>handleGender(e)} >
        <option value='All'>Generos</option>
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
