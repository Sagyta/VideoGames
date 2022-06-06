import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getName } from '../../redux/action'
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBar(){
    const dispatch= useDispatch()
    const [name, setName] = useState('')

    function handleImputChange(e){
      e.preventDefault()
      setName(e.target.value)
      console.log(name)
    }

    function handleSubmit(e){
      e.preventDefault()
      /* (!name)
      ? alert('completa')
      : dispatch(getName(name))
      setName(e.target.value)
      setName('') */
      if(!name){
        return alert('please entre un nombre')
      }else{
          dispatch(getName(name))
          setName(e.target.value)
          setName('')        
      }
    }
    function handleKeyPress(e){
      if(e.whitch === 13){
        e.preventDefault()
        dispatch(handleSubmit())
      }
    }

  return (    
    <div>
      <form onSubmit={handleSubmit} className={style.searchbox} onKeyPress={handleKeyPress}>
        <input
        className={style.inputsearch}
        type='text'
        name='search'
        id='search'
        value={name}
        placeholder='Ingrese el nombre'
        onChange={(e)=>handleImputChange(e)}
        />
        <button className={style.btnsearch}>Buscar</button>
      </form>

    </div> 
  )
}


 {/* <div className={style.searchbox}>

      <input className={style.inputsearch} 
        type='text' 
        name='search' 
        placeholder='buscar'
        value={name}
        onChange={handleImputChange}
        />

      <button className={style.btnsearch} onSubmit={handleSubmit}></button>
    </div> */}