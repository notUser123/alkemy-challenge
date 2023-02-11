import "./Login.css"

const submitHandler = e =>{
  e.preventDefault()
  const email = e.target.email.value 
  const pass = e.target.password.value
  console.log(email, pass)
}

function Login() {
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