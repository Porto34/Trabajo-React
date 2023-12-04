import './App.css';
import Menu from './Menu.jsx';
import Section from './Section.jsx';
import Comic from './Comic.jsx';
import Creadore from './Creadore.jsx';
import Contacto from './Contacto.jsx';
import Tienda from './Tienda.jsx'

function App(props) {
  

  return (
    <>
      <Menu/>
      <Section inicio="INICIO"/>
      <Comic sinopsis="SINOPSIS"/>
      <Creadore/>
      <Contacto/>
      <Tienda/>
    </>
  )
}

export default App
