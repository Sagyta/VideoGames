import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearDetalle, getDetalle } from '../../redux/action'
import DetalleRender from '../DetalleRender/DetalleRender'
import Error404 from '../Error404/Error404'
import Loading from '../Loading/Loading'



export default function GameDetalles(){
  const detalle= useSelector((state)=>state.detalle)
  const { id } = useParams()

  const dispatch= useDispatch()
  const [/*cambio */, setCambio] = useState(false)

  useEffect(()=>{
   /*  const [detalle, setDetalle] */
    dispatch(getDetalle(id))
    setCambio(true)
    return()=>{
      dispatch(clearDetalle())
    }
  }, [id, dispatch] )

  if(detalle.name === 404){
    return (
      <Error404/>
    )
  }
  return (
    
    <div>
      
      {
     /*   detalle.name ? <DetalleRender detalle={detalle}/> : <Error404/> */
    
     detalle.name ?  <DetalleRender detalle={detalle}/>: <Loading/>
      }
    </div>
  )
}

