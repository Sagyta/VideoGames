import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/juegodefault.png'
import style from '../DetalleRender/DetalleRender.module.css'

export default function DetalleRender({detalle}){
  let platId=1
    const{
        name,
        image,
        description,
        rating,
        released,
        platform,
        platforms,
        genres
    } = detalle
 
  return (
    <div className={style.contenedor}>
        <div className={style.titulo}>
        <h1>{name}</h1>
        <div className={style.imagen}>
        <img src={image ? image : img} alt='imagen' /* style={{width:'300px'}} */ />
        </div>
        <div className={style.descripcion}>
        <h4>{description}</h4>
        <h3>Fecha de lanzamiento: {released}</h3>
        </div>


        <h3>Rating: {rating}</h3>
        <h3>Plataforma: {platform ? platform : platforms}</h3>
        <h3>Genero:</h3>
         {detalle.genres?.map((e, index) => {
                  return <h4 key={index}>{e.name ? e.name : e}</h4>;
                })}
        </div>
        <div>
            <Link to='/home'>
            <button>Home</button>
            </Link>
        </div>
    </div>
  )
}
