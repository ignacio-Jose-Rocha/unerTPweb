import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormularioContacto from './components/contacto/contacto';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import AddAlojamiento from './components/Form/form';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<FormularioContacto />} />
        <Route path="/sobreNosotros" element={< SobreNosotros/>} />
        <Route path="/form-admin" element={< AddAlojamiento/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
