import React, { useEffect, useState } from 'react'
import style from '../CrearVideoGames/CrearVideoGames.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/action'
import axios from 'axios'


const validate = (input) => {
  const errors = {}
  if(!input.name) errors.name = "Por favor escribe un nombre"
  if(!input.description) errors.description = "Por favor escribe una descripción"
  if(!input.released) errors.released = "Por favor escribe una released"
  if(input.rating < 1 || input.rating > 5) errors.rating = "Por favor escribe una rating valido de 1 a 5"
  if(!input.platforms) errors.platforms = "Por favor escribe una platforms"
  if(!input.genres.length) errors.genres = "Por favor selecciona al menos un genero"
  return errors;
}

export default function CrearVideoGames(){
  const dispatch = useDispatch()
  const gameGenres= useSelector((state) => state.genres)
  const history = useHistory();
  const [errors, setErrors] = useState({})

  let gameGenres2 = gameGenres.map((e) => e.name)

  const [input, setInput] = useState({
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
  
  const handleChange = (e) => {
    e.preventDefault();
    setInput((prevInput) => {   
      const newInput = {
          ...prevInput,
          [e.target.name]: e.target.value
      }
      const validations = validate(newInput);
      setErrors(validations)
      return newInput
    });
  };

  // const handleGenres =(e)=>{
  //   setInput({
  //     ...input,
  //     genres:[...input.genres, e.target.value]
  //   })
  // }

  const handleCheckBox = (e) => {
    let newArray = input.genres
    console.log(newArray)
    let find = newArray.indexOf(e.target.value);    
    if (find >= 0) { newArray.splice(find, 1)} 
    else { newArray.push(e.target.value) }
    setInput({
        ...input,
        gameGenres2: newArray
    });
    const validations = validate(input);
    setErrors(validations)
}

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (Object.values(errors).length > 0) {
      alert("Info required is missing");
    } else if (
      input.name === '' && 
      input.description === '' &&
      input.released === '' && 
      input.rating === '' &&
      input.platforms === '' &&
      !input.genres.length) {
      alert("Complete de form");}
    else {
      try{
        const response = await axios.post('http://localhost:3001/videogames', input)
        alert(`Tu videojuego '${response.data.name}' fue creado!`)
        history.push('/home')
      } catch(err) {
        alert(err.response.data.message)
      }
     }
  }

  return (
    <div className={style.contenedor}>
      <div className={style.form}>Crear Video Games
        <div>
          <Link to='/home'>
            <button className={style.btn}>Volver al home</button>
          </Link>
        </div>
        <hr/>

        <form onSubmit={ handleSubmit }>
          <div>
              <label>Name:</label>
              <input 
              name='name' 
              placeholder='Ingrese un nombre'
              type="text" 
              value={ input.name } 
              onChange={ handleChange } />
              { errors.name && <p className="error">{ errors.name }</p> }
          </div>

          <div><label>Descripcion: </label>
            <textarea
              type='text'
              placeholder='Ingrese una descripcion'
              name='description'
              value={ input.description }
              onChange={ handleChange }
              />
              {errors.description && <p>{ errors.description }</p>}
          </div>

          <div><label>Fecha de creacion: </label>
            <input
            type='text'
            placeholder='Ingrese fecha aa-mm-dd'
            name='released'
            value={input.released}
            onChange={ handleChange }
            />
            {errors.released && <p>{ errors.released }</p>}
            </div>

          <div><label>Rating: </label>
            <input
            type='number'
            name='rating'
            value={ input.rating }
            onChange={ handleChange }
            placeholder='Un valor de 1 a 5'
            />
            {errors.rating && <p>{ errors.rating }</p>}
            </div>

          <div><label>Plataforma: </label>
            <input
            type='text'
            name='platforms'
            value={ input.platforms }
            onChange={ handleChange }
            />
            {errors.platforms && <p>{ errors.platforms }</p>}
            </div>

          <div>
            <label>Generos:</label>
            {
              gameGenres2.map((genres) => {
                console.log(gameGenres2.length )
                return (
                  <div>
                    <input name={ genres} type="checkbox" 
                    value={ genres}  
                    disabled ={input.genres.length > 2 && !input.genres.includes(genres)} 
                    selected={ input.genres.includes(genres) } onChange={ handleCheckBox } />
                    <label>{ genres }</label>
                  </div>
                )
              })}
                { errors.gameGenres && <p className="error">{ errors.gameGenres }</p> }
          </div>

          <hr/>
          <div>
            <button type="submit" disabled={
              errors.name || 
              errors.description ||
              errors.released ||
              errors.rating ||
              errors.platforms ||
              errors.genres
              }>Crear</button>
          </div>
        </form>
        
      </div>
    </div>
  )
}