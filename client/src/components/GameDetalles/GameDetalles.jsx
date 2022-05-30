import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetalle } from '../../redux/action'

import style from '../Home/Home.module.css'

export default function GameDetalle(){
    const dispatch= useDispatch()
    const {id}= useParams()
    console.log(id)
    useEffect(()=>{
        dispatch(getDetalle(id))
    },[dispatch])

    const detalle= useSelector((state)=> state.detalle)

    return (
        <div className={style.detalle}>
          <br />
          {detalle && detalle ? (
            <div className={style.detalle}>
              <div className={style.titulo}>
                <h1>¡Un {detalle.name} salvaje ha aparecido!</h1>
              </div>
              <div className={style.carta}>
                <h3> Mi nombre es {detalle.name}!!!</h3>
                <h3> Tengo {detalle.description} de vida!! </h3>
                <h3>Tengo {detalle.rating} de fuerza!!</h3>
                <h3> Tengo {detalle.released} de defensa!</h3>
                {/* <h3> Tengo {detalle.speed} de velocidad!!</h3>
                <h3> Mi altura es {detalle.height} metros!!</h3>
                <h3> Mi peso es {detalle.weight} kg!!</h3> */}
                <img
                  src={
                    detalle.image
                      ? detalle.image
                      : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg"
                  }
                  alt="cargando"
                  width="200px"
                  height="250px"
                />
                <h3>Mis generos son: </h3>
                {detalle.genres?.map((e, index) => {
                  return <h3 key={index}>{e.name ? e.name : e}</h3>;
                })}
              </div>
            </div>
          ) : (
            <p> Loading Pokemon..</p>
          )}
          <br />
          <Link to="/home">
            <button className={style.btn}>Volver al Home</button>
          </Link>
          <br />
        </div>
      ); 
}
