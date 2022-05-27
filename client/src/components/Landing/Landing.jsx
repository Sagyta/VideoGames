import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Landing/Landing.module.css'

export default function Landing(){
  return (
    <div className={style.landing}>
      
      <Link to='Home'><button className={style.entrar}></button></Link>

    </div>
  )
}
