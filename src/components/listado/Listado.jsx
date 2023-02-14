import { Navigate } from 'react-router-dom'

function Listado() {

  const token = localStorage.getItem('token')
  
  return (
    <>
      { !token && <Navigate to="/" />}
      <h2>Listado</h2>
    </>
  )
}

export default Listado