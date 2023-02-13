import Login from "./components/login/Login"
import { Routes , Route} from 'react-router-dom'
import Listado from "./components/listado/Listado"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  return (
     <>
      <Header />

      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/listado" element={ <Listado /> } />
      </Routes>
      
      <Footer />
     </>
  )
}

export default App
