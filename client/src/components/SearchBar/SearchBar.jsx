import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getName } from '../../redux/action'


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
      if(name){///aca agregar alerta por si no hay nada
        dispatch(getName(name))
        setName('')
      }
    }

  return (
    <div>
      
      <input
      type='text'
      value={name}
      placeholder='Ingrese el nombre'
      onChange={(e)=>handleImputChange(e)}
      />

      <button type='submit' onClick={(e)=>handleSubmit(e)}>Buscar</button>

    </div>
  )
}
