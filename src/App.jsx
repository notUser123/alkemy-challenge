import Login from "./components/login/Login"
import { Routes , Route} from 'react-router-dom'
import Listado from "./components/listado/Listado"

function App() {

  return (
     <>
      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/listado" element={ <Listado /> } />
      </Routes>
     </>
  )
}

export default App
