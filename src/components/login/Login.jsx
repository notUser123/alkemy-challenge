import axios from "axios"
import {useNavigate} from 'react-router-dom'
import "./Login.css"

function Login() {

  const navigateTo = useNavigate()

  const submitHandler = e =>{
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value
  
    if ( email !== "challenge@alkemy.org" && password !== "react"){
      console.log("error de credenciales")
      localStorage.clear()
      return
    }
  
    console.log("OK estamos listos para enviar la informacion")
    axios.post('http://challenge-react.alkemy.org', { email, password})
    .then(res => {
      const tokenActual = res.data.token
      localStorage.setItem('token', tokenActual)
      navigateTo('/listado')
    })
    
  }

  return (
    <div className="login-stack">
        <h2>Formulario</h2>
        <form onSubmit={submitHandler}>
          <input type="email" placeholder="email" name="email"/>
          <input type="password" placeholder="pass" name="password"/>
          <button type="submit">Ingresar</button>
        </form>
        
    </div>
  )
}

export default Login