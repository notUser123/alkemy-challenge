import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Listado() {

  const navigateTo = useNavigate()  
  
  useEffect( () => {
    const token = localStorage.getItem("token")
    if(token === null){
        navigateTo("/")
    }
  }, [])

  
  return (
    <div>Listado</div>
  )
}

export default Listado