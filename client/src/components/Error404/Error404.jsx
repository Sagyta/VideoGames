import React from 'react'
import style from '../Error404/Error404.module.css'
import error from '../../img/gameOver.gif'
import { Link } from 'react-router-dom'

export default function Error404(){
     return (
       <div className={style.error}>

         <div className={style.blank}>&nsbp;</div>
          <div className={style.nohay}>
            <img src={error} alt='Error404'/>
          

          <div  className={style.texto} >
          <h1>Ops! ha ocurrido un error</h1>
          </div>
          </div>

          <div className={style.Btn}>
          <Link to='/home'><button>Volver al Home</button></Link>
          </div>
        </div>
      )    
}
