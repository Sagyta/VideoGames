import React from 'react'
import style from '../Videogames/Videogames.module.css'
import img from '../../img/juegodefault.png'
import { Link } from 'react-router-dom'


export default function Videogames ({name, image, genres}){
  let genresId=1
  if(!image) image= img
  return (
    <div className={style.card}>
        <img src={image} alt='imagen' className={style.img} />
        
         <h3>{name}</h3> 
         <h5>{genres.map(e=>{
           return(
             <span key={genresId++}> «{e}» </span>
             )
            })}</h5> 

    </div>
  )
}
