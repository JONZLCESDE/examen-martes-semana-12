import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../auth/Home';
import Detalle from '../componentes/pages/Detalle';
import DosImagenes from '../componentes/pages/DosImagenes';
import Listado from '../componentes/pages/Listado';
import Login from '../componentes/pages/Login';


import Registro from '../componentes/pages/Registro';
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buscar-cliente" element={<Login />} />
        <Route path="/buscar-producto" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/dos-imagenes/:id" element={<DosImagenes />} />
        <Route path="/registro" element={<Registro />} />
        
        <Route path="/" element={<Navigate to="/buscar-cliente" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;


