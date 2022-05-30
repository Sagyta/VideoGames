import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clear, getDetalle } from '../../redux/action'


export default function GameDetalles(){
  const {id} = useParams()
  let game= useSelector((state)=> state.detalle)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDetalle(id))
    return ()=> dispatch(clear())
  },[dispatch, id])

  if(game.name){
    return (
      <div>
        <div>
          <h1>{game.name}</h1>
        </div>
        <img src={game.image} alt='imagen' />
        
        <div>
        <h3>Descripcion</h3>
        <div>{game.description}</div>
        <span>
          <h3>Plataforma</h3>
          <ul>
            {game.platforms.map(p=>{
              return (<ul key={p}>{p}</ul>)
            })}
          </ul>
        </span>
        <span>
          <h3>Genero</h3>
          {game.id.length>8
          ? game.Genres.map(g=>{
            return (<ul key={g.id}>{g.name}</ul>)
          }): game.genres.map(g=>{
            return (<ul key={g.id}>{g}</ul>)
          })}
        </span>
        <span>
          <h3>Rating</h3>
          <div>{game.rating}</div>
          <h3>Release date:</h3>
          <div>{game.released}</div>
        </span>
          </div>

          <Link to='/home'>
            <button>Home</button>
          </Link>
      </div>
      
    )
  }
  return <p>Loading</p>
}
