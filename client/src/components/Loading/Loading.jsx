import React from 'react'
import loading from '../../img/loading.gif'
import style from '../Loading/Loading.module.css'

export default function Loading(){
  return (
    <div className={style.loading}>
        <img src={loading} alt='Loading'/>
    </div>
  )
}
