import { Routes, Route, Navigate } from "react-router-dom";
import { Auditoría } from "../pages/Auditoría";
import { Expedientes } from "../pages/Expedientes";
import { Procesos } from "../pages/Procesos";
import { Roles } from "../pages/Roles";
import { Trabajadores } from "../pages/Trabajadores";
import { Trazas } from "../pages/Trazas";
import { Usuarios } from "../pages/Usuarios";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/usuarios' element={<Usuarios />} />
      <Route path='/roles' element={<Roles />} />
      <Route path='/trazas' element={<Trazas />} />
      <Route path='/auditoría' element={<Auditoría />} />
      <Route path='/expedientes' element={<Expedientes />} />
      <Route path='/trabajadores' element={<Trabajadores />} />
      <Route path='/procesos' element={<Procesos />} />
      <Route path='*' element={<Navigate to='/usuarios' />} />
    </Routes>
  );
};
