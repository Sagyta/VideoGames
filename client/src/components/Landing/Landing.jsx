import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Landing/Landing.module.css'

export default function Landing(){
  return (
    <div className={style.content}>
        <div className={style.falso}>
          </div>
          
          <div className={style.enter}>
          <Link to='/home'><button className={style.img}></button></Link>

        </div>
    </div>
  )
}