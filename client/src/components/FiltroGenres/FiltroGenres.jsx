import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtroGenres, getGenres, getvideogames } from '../../redux/action'
import style from '../FiltroGenres/FiltroGenres.module.css'


export default function FiltroGenres(){

    const dispatch =useDispatch()
    const allGenres = useSelector((state)=>state.genres)
    const allVideos= useSelector((state)=>state.videogames)
    const [videos, setVideos] = useState('')

    useEffect(()=>{
        dispatch(getvideogames())
        dispatch(getGenres())
    },[dispatch])

    const handleGender = (e)=>{
        e.preventDefault()
        dispatch(filtroGenres(e.target.value))
        setVideos(e.target.value)
        //console.log(e.target.value)
        //console.log()
    }

  return (
    <div className={style.algo}> Buscar por Genero
        
        <select onChange={(e)=>handleGender(e)} >
            {/* <option>Generos</option> */}
            <option value='All'>Generos</option>
            {
                allGenres?.map((e)=>(
                    <option key={e.name} value={e.name}>
                        {e.name}
                    </option>
                ))}
        </select>

    </div>
  )
}
