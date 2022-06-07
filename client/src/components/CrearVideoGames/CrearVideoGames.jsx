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
  if(!input.released) errors.released = "Por favor selecciona una fecha de lanzamiento"
  if(input.rating <0 || input.rating >5) errors.rating = "Por favor seleccione una rating valido de 1 a 5"
  if(!input.platform.length || input.platform.length >5) errors.platform = "Por favor selecciona entre 1 y 5 plataformas"
  if(!input.genres.length || input.genres.length >4) errors.genres = "Por favor selecciona entre 1 y 4 generos" 
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
    platform:[],
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

  const arrayPlat=[
    'Android',
    'iOS',
    'Linux',
    'macOS',
    'Nintendo Switch',
    'PC',
    'PlayStation 3',
    'PlayStation 4',
    'PlayStation 5',
    'PS Vita',
    'Web',
    'Xbox 360',
    'Xbox One',
    'Xbox Series S/X',
    'Xbox',
  ]

  //const newArrayPlat= arrayPlat.map(e=>e)
  const handlePlatform =(e)=>{
    let array= input.platform
    let ver= array.indexOf(e.target.value)
    console.log('ver', ver)
    if(ver>=0){array.splice(ver,1)}
    else{array.push(e.target.value)}
    setInput({
      ...input,
      arrayPlat:array
    })
    console.log('arrayPlar', arrayPlat)
    const validations = validate(input);
    setErrors(validations)
     }

  const handleCheckBox = (e) => {
    let newArray = input.genres
    let find = newArray.indexOf(e.target.value);   
    console.log('find', find) 
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
      input.name === ''  && 
      input.description === '' &&
      input.released === '' && 
      input.rating === '' &&
      !input.platform.length &&
      !input.genres.length ) {
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
    
    <div className={style.contGrid}>
      <div className={style.back}>&nbsp;</div>
      
      <div className={style.titulo}>
        <span>Crea tu Video Games</span>
          
            <Link to='/home'>
              <button className={style.btn}>Volver al home</button>
            </Link>    
      </div>
      
      <div className={style.desc}>
        <div className={style.form}>
        <form onSubmit={ handleSubmit }>
        
        <div className={style.label}><label> Nombre del Video Juego: </label></div>
        <div>
          <span>
              <input 
              className={style.input}
              name='name' 
              placeholder='Ingrese un nombre'
              type="text" 
              value={ input.name } 
              onChange={ handleChange } />
              { errors.name && <p className="error">{ errors.name }</p> }
          </span></div>
          
          <div className={style.label}><label> Descripcion: </label></div>
          <div ><span>
            <textarea
              className={style.textarea}
              type='text'
              placeholder='Ingrese una descripcion'
              name='description'
              value={ input.description }
              onChange={ handleChange }
              />
             {errors.description && <p>{ errors.description }</p>} 
          </span></div>
          
          <div className={style.label}><label> Fecha de Lanzamiento: </label></div>
          <div><span>
            <input
            className={style.input}
            type='date'
            min='1998-12-31'
            placeholder='Ingrese fecha aa-mm-dd'
            name='released'
            value={input.released}
            onChange={ handleChange }
            />
             {errors.released && <p>{ errors.released }</p>}
            </span></div>

            <div className={style.label}><label>Rating: </label></div>
            <div ><span>
            <input
            className={style.input}
            type='number'
            min='0'
            max='5'
            name='rating'
            value={ input.rating }
            onChange={ handleChange }
            placeholder='valor de 0 a 5'
            />
             {errors.rating && <p>{ errors.rating }</p>}
             </span></div>

          <div className={style.check}><label> Plataforma permitidas: puedes seleccionar hasta 5 plataformas </label>
          <div>
          {arrayPlat.map(plat=> {
            return(
              <div className={style.checkbox}>
                <ul><li>
              <input              
              type='checkbox'
              id={plat}
              name={plat}
              value={ plat }
              disabled ={input.platform.length > 4 && !input.platform.includes(plat)} 
              selected={ input.platform.includes(plat) } onChange={ handlePlatform }
              />
              <label for={plat} >{plat}</label>
              </li></ul>
              </div>
              )})
            }
            </div></div>
            <div>{errors.platform && <p>{ errors.platform }</p>} </div>
            

            <div className={style.check}><label> Generos: puedes seleccionar hasta 4 generos</label>
          <div>
            {
              gameGenres2.map((genres) => {               
                return (                  
                    <div className={style.checkbox}>
                      <ul><li>
                    <input 
                    id={genres}                    
                    name={ genres} 
                    type="checkbox" 
                    value={ genres}  
                    disabled ={input.genres.length > 3 && !input.genres.includes(genres)} 
                    selected={ input.genres.includes(genres) } onChange={ handleCheckBox } />
                    <label for={genres}>{ genres }</label>
                    </li></ul>
                    </div>                 
                )
              })}
                 </div></div>
              <div>{ errors.genres && <p className="error">{ errors.genres }</p> }</div>   
{console.log('ver que carga', input)}
          
          <div className={style.Btn}>
            <button type="submit" disabled={
             errors.name || 
              errors.description ||
              errors.released ||
              errors.rating ||
              errors.platform ||
              errors.genres 
              }>Crear</button>
          </div>
        </form>
          
        </div>
        
      </div>
      <div className={style.back2}>&nbsp;</div>
    </div>
  )
}