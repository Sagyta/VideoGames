import React, { useEffect, useState } from 'react'
import style from '../CrearVideoGames/CrearVideoGames.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { crearVideoGames, getGenres } from '../../redux/action'



export const CrearVideoGames = () => {
  const dispatch = useDispatch()
  const gameGenres= useSelector((state)=>state.genres)

  const [game, setGame] = useState({
    name:'',
    description:'',
    released: '',
    rating: '',
    platforms:'',
    genres:[]
  })

  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch])
  
  const handleChange=(e)=>{
    setGame({
      ...game,
      [e.target.name]: e.target.value
    })
  }
console.log(setGame)
  const handleGenres =(e)=>{
    setGame({
      ...game,
      genres:[...game.genres, e.target.value]
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(crearVideoGames(game))
    alert('Video Game creado correctamente')
  }

  return (
    <div className={style.contenedor}>
      <div className={style.form}>Crear Video Games
      <div>
      <Link to='/home'><button className={style.btn}>Volver al home</button></Link>
        </div>
        <hr/>

        <form onSubmit={e=> handleSubmit(e)}>
          <div><label>Nombre: </label>
            <input
            type='text'
            name='name'
            value={game.name}
            onChange={e=> handleChange(e)}
            /></div>

          <div><label>Descripcion: </label>
            <textarea
              type='text'
              name='descripcion'
              value={game.description}
              onChange={e=> handleChange(e)}
            /></div>

          <div><label>Fecha de creacion: </label>
            <input
            type='text'
            name='creacion'
            value={game.released}
            onChange={e=> handleChange(e)}
            /></div>

          <div><label>Rating: </label>
            <input
            type='text'
            name='rating'
            value={game.rating}
            onChange={e=> handleChange(e)}
            /></div>

          <div><label>Plataforma: </label>
            <input
            type='text'
            name='plataforma'
            value={game.platforms}
            onChange={e=> handleChange(e)}
            /></div>

          <div><label>Genero: </label>
             <select onChange={e=> handleGenres(e)}>
               <option>Selecciona</option>
               {gameGenres.map(e=>(
                 <option key={e.id} value={e.name}>
                    {e.name}
                 </option>
               ))}
             </select>
          </div>

          <hr/>
          <div><button>Crear</button></div>
        </form>

      </div>
    </div>
  )
}
