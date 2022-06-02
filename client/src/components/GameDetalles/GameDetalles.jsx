import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearDetalle, getDetalle } from '../../redux/action'
import DetalleRender from '../DetalleRender/DetalleRender'



export default function GameDetalles(){
  const detalle= useSelector((state)=>state.detalle)
  const { id } = useParams()

  const dispatch= useDispatch()
  const [/*cambio */, setCambio] = useState(false)

  useEffect(()=>{
    dispatch(getDetalle(id))
    setCambio(true)
    return()=>{
      dispatch(clearDetalle())
    }
  }, [id, dispatch] )

  return (
    <div>
      
      {
        <DetalleRender detalle={detalle}/>
      }
    </div>
  )
}

