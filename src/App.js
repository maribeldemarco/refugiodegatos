import './Styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Contactanos from './Contactanos';
import Gatosenadopcion from './Gatosenadopcion';
import Home from './Home';
import Quienessomos from './Quienessomos';
import Pruebacrud from './Voluntarios';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/michisenadopcion" element={<Gatosenadopcion />} />
        <Route path="/quienessomos" element={<Quienessomos />} />
        <Route path="/prueba" element={<Pruebacrud />} />
      </Routes>

    </div>
  )

}

export default App;
