
import './App.css'
import About from './components/about/about'
import Header from './components/header/header'
import Home from './components/home/home'
import Habilidades from './components/habilidades/habilidades'
import Projetos from './components/projetos/projetos'
import Contato from './components/contato/contato'

function App() {
  

  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
    </div>
    
  )
}

export default App
