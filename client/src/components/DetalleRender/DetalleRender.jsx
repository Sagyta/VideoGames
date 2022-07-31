import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import img from '../../img/juegodefault.jpg'
import { deleteVideogame } from '../../redux/action'
import style from '../DetalleRender/DetalleRender.module.css'
import { useDispatch } from 'react-redux'

export default function DetalleRender({detalle, id}){
  
  const dispatch = useDispatch()
  const history = useHistory()

    const{
        name,
        image,
        description,
        rating,
        released,
        platform,
    } = detalle

   function handleDelete (){
     dispatch(deleteVideogame(id))
     history.push('/home')
   }
 
  return (
    <div className={style.contenedor}>
     
      <div className={style.titulo}>
          <span><h1>{name}</h1></span>

            {/* <button onClick={handleDelete}>Delete</button>
            <button>Actualizar</button> */}
           <Link to='/home'><button>Home</button></Link>
      </div>

      <div className={style.imagen}>
      <img src={image ? image : img} alt='imagen' />
      </div>

      <div className={style.detalles}>
        <div className={style.detArr}>

        <div>
        <h3>Lanzamiento:</h3>
        <h5>{released}</h5> 
        </div>
        
        <div>
          <h3>Rating: </h3> 
          <h5>{rating} Puntos</h5> 
        </div>

        </div>

        <div className={style.plat}>          
        <h3>Plataforma:</h3>
        {detalle.platform?.map((e, index)=>{
          return <span key={index}><button>{e.platform ? e.platform : e}</button></span>
        })}          
        </div>

        <div className={style.gener}>
        <h3>Genero:</h3>
        {detalle.genres?.map((e, index) => {
          return <span key={index}><button>{e.name ? e.name : e}</button> </span>;
        })}
        </div>

      </div>

      <div className={style.desc}>
      <h4></h4>
      <h4>{description}</h4>      
      </div>
    </div>
  )
}
