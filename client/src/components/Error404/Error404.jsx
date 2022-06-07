import React from 'react'
import style from '../Error404/Error404.module.css'
import error from '../../img/gameOver.gif'

export default function Error404(){
     return (
        <div className={style.error}>
            <img src={error} alt='Error404'/>
        </div>
      )    
}
