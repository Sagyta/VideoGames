import React, { useEffect, useState } from 'react'
import style from '../CrearVideoGames/CrearVideoGames.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { crearVideoGames, getGenres } from '../../redux/action'
import img from '../../img/juegodefault.png'
import Validation from '../Validation/Validation'


export default function CrearVideoGames(){
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const gameGenres= useSelector((state)=>state.genres)
  
  const [game, setGame] = useState({
    name:'',
    released: '',
    rating: '',
    description:'',
    background_image: img,
    genres:[],
    platforms:[],
  })
  
  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch])

  const selectPlatform =[
    'PlayStation 3',
    'Xbox 360',
    'Xbox Series S/X',
    'Nintendo Switch',
    'PlayStation 5',
    'Xbox One',
    'PC',
    'PlayStation 4'
  ];
  
  
  const handleChange=(e)=>{
    e.preventDefault()
    setGame({
      ...game,
      [e.target.name]: e.target.value
    })
    setErrors(
      Validation({
        ...game,
        [e.target.value]: e.target.value
      })
    )
  }
console.log('Soy console linea 54',game)

  const handleGenres =(e)=>{
    setGame({
      ...game,
      genres:[...new Set([...game.genres, e.target.value])]
    })
  }

  const handleDeleteGenres=(e)=>{
    let filtro= game.genres.filter((f)=>f !== e.target.value)
    //console.log(e)

    setGame({
      ...game,
      genres:[...filtro]
    })
  }

  const handleReset = (e)=>{
    e.preventDefault()
    setGame({
      name:'',
      released: '',
      rating: '',
      description:'',
      background_image: img,
      genres:[],
      platforms:[],
    })
    setErrors({})
  }

  const handlePlatform =(e)=>{
    setGame({
      ...game,
      platforms: [...new Set([...game.platforms, e.target.value])],
    })
  }

  const handleDeletePlatform =(e)=>{
    let filtro = game.platforms.filter((f)=> f !==e.target.value)
    setGame({
      ...game,
      platforms: [...filtro]
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(Validation(game))
    if(
      game.name &&
      game.released &&
      game.description &&
      game.genres.length &&
      game.platforms.length &&
      !Object.keys(errors).length
    )
    {
      dispatch(crearVideoGames(game))
      alert('Video Game creado con exito')
      setGame({
        name:'',
        released: '',
        rating: '',
        description:'',
        background_image: img,
        genres:[],
        platforms:[],
      })
    }else{
      alert('Todos los campos son requeridos')
    }
  }

  return (
    <div className={style.contenedor}>
      <div className={style.form}>Crear Video Games
      <div>
      <Link to='/home'><button className={style.btn}>Volver al home</button></Link>
        </div>
        <hr/>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div><label>Nombre: </label>
            <input
            type='text'
            name='name'
            value={game.name}
            onChange={e=> handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
            </div>

          <div><label>Fecha de creacion: </label>
            <input
            type='date'
            min='2001-01-20'
            max='2022-07-02'
            name='released'
            value={game.released}
            onChange={e=> handleChange(e)}
            />
            {errors.released && <p>{errors.released}</p>}
            </div>

          <div><label>Descripcion: </label>
            <textarea
              type='text'
              name='description'
              value={game.description}
              onChange={e=> handleChange(e)}
            ></textarea>
            {errors.description &&( <p>{errors.description}</p>)}
            </div>

          <div><label>Rating: </label>
            <input
            type='number'
            placeholder='de 1 a 5'
            step='0.10'
            min='1'
            max='5'
            name='rating'
            value={game.rating}
            onChange={e=> handleChange(e)}
            />
            {errors.rating && <p>{errors.rating}</p>}
            </div>

          <div><label>Plataforma: </label>
            <select onChange={handlePlatform}>
              <option>
                select
              </option>
              {selectPlatform?.map(e=>{
                return(
                  <option name='platforms' value={e}> {e} </option>
                )
              })}
            </select>
            {errors.platforms && <p>{errors.platforms}</p>}
            </div>

          <div><label>Genero: </label>
             <select onChange={e=> handleGenres(e)}>               
               <option>Selecciona</option>
               {gameGenres.map(e=>(
                 <option value={e.id}>
                    {e.name}
                 </option>
               ))}
             </select>
             {errors.genres && <p>{errors.genres}</p>}
          </div>

          <hr/>
          <div><button onChange={handleSubmit} type='submit'>Crear</button>
         <button type='reset'>Reset</button></div>
        </form>

        <div>
          {game.platforms.map(e=>(
            <div>
              <div key={e} name={e} value={e}>{e}</div>
              <button value={e} onClick={handleDeletePlatform}>X</button>
            </div>
          ))}
        </div>

        <div>
          {game.genres.map(e=>(
            <div>
            <div key={e} name={e} value={e}> {e} </div>
            <button name={e} value={e} onClick={handleDeleteGenres} key={e}>X</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
