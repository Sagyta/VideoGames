import React from 'react'
import style from '../Footer/Footer.module.css'
import java from '../../img/javas.png'
import node from '../../img/node.png'
import express from '../../img/express.png'
import postgre from '../../img/postgre.png'
import sequelize from '../../img/sequelize.png'
import react from '../../img/react.png'
import redux from '../../img/redux.png'
import html from '../../img/html.png'
import css from '../../img/css.png'


export default function Footer (){  
    return (
      <div className={style.navContenedor}>  
        <div className={style.logos}>
        <div>
        <div className={style.tituloIzq}>
        <h4>Back End: </h4>
        </div>
            <div className={style.icoIzq}>
                <p>
                <img src={java} alt='Instagram' /> 
                </p> Javascript
            </div>
            <div className={style.icoIzq}>
                <p>
                <img src={node} alt='Instagram' /> 
                </p> Node.js
            </div>
            <div className={style.icoIzq}>
                <p>
                <img src={express} alt='Instagram' /> 
                </p> Express
            </div>
            <div className={style.icoIzq}>
                <p>
                <img src={postgre} alt='Instagram' /> 
                </p> PostgreSQL
            </div>
            <div className={style.icoIzq}>
                <p>
                <img src={sequelize} alt='Instagram' /> 
                </p> Sequelize
            </div>
            </div>

            <div className={style.tituloDer}>
            <h4>Front End: </h4>
            </div>
            <div className={style.icoDer}>
                <p>
                <img src={react} alt='Instagram' /> 
                </p> React
            </div>  
            <div className={style.icoDer}>
                <p>
                <img src={redux} alt='Instagram' /> 
                </p> Redux
            </div> 
            <div className={style.icoDer}>
                <p>
                <img src={html} alt='Instagram' /> 
                </p> HTML
            </div> 
            <div className={style.icoDer}>
                <p>
                <img src={css} alt='Instagram' /> 
                </p> CSS
            </div> 
            <div className={style.copy}>

            <h5>Full Stack Web Developer ® 2022 - betinarenaudo@gmail.com</h5>      
            </div>
            </div>
        </div> 
    )
}
