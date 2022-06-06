import React from 'react'
import style from '../Videogames/Videogames.module.css'
import img from '../../img/juegodefault.jpg'


export default function Videogames ({name, image, genres}){
  let genresId=1
  if(!image) image= img
  return (

<div>
        <div className={style.card}>
            <img src={image} alt='imagen' />


<div className={style.descriptions}>
                <h2>{name}</h2>
                
                <h4>Géneros{genres.map(e=>{
                  return(
                    <p key={genresId++}> « {e} »</p>
                  )
                })}</h4>
            </div>
            </div>
            </div>
)
} 

