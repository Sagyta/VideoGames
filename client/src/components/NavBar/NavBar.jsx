import React from 'react'
import { Link } from 'react-router-dom'
import FiltroGames from '../FiltroGames/FiltroGames'
import FiltroGenres from '../FiltroGenres/FiltroGenres'
import style from '../NavBar/NavBar.module.css'
import OrdenABC from '../OrdenABC/OrdenABC'
import OrdenRating from '../OrdenRating/OrdenRating'
import SearchBar from '../SearchBar/SearchBar'
import I from '../../img/insta.png'
import F from '../../img/face.png'
import G from '../../img/git.png'
import L from '../../img/linkedin.png'
import { useDispatch } from 'react-redux'
import {  home } from '../../redux/action'


export default function NavBar({setPaginaActual, setOrder}){
 
  const dispatch = useDispatch()

  function handleHome(e){
    e.preventDefault()
    dispatch(home())
    setPaginaActual(1);
  }

  return (
    <div className={style.navContenedor}>

      <div className={style.redes}>
       <div className={style.search}><SearchBar /></div> 
      
      <div  className={style.iconos}>
        <ul>
          <Link to={{pathname: 'https://www.instagram.com/betinarenaudo/'}} target='_blank'>
            <li><img src={I} alt='Instagram' /></li></Link>
          <Link to={{pathname: 'https://www.facebook.com/betina.renaudo'}} target='_blank'>
            <li><img src={F} alt='Facebook' /></li></Link>
          <Link to={{pathname: 'https://www.linkedin.com/in/betina-renaudo-90331122a/'}} target='_blank'>
            <li><img src={L} alt='Linkedin' /></li></Link>
          <Link to={{pathname: 'https://github.com/Sagyta'}} target='_blank'>
            <li><img src={G} alt='GitHub' /></li></Link>
        </ul>
      </div>  

      </div>

    <div className={style.fondo}></div>

      <div className={style.footer}>
        <div className={style.selectfiltro}>
          <FiltroGenres setOrder={setOrder} setPaginaActual={setPaginaActual} />
          <FiltroGames setOrder={setOrder} setPaginaActual={setPaginaActual}/>
        </div>
             <div className={style.botones}>
              <ul className={style.btnNav}>
                <li><Link to='/home' onClick={handleHome}>Home</Link></li>
                <li><Link to='/crear'>Crear personaje</Link></li>
              </ul>
             </div>
        <div className={style.selectorden}>
          <OrdenABC setOrder={setOrder} setPaginaActual={setPaginaActual}/>
          <OrdenRating setOrder={setOrder} setPaginaActual={setPaginaActual}/>
        </div>
        </div>    
    </div>
  )
}
