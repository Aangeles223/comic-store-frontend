import React from "react";
import { useState } from "react"; // Importa el hook useState
import { Navigate } from "react-router-dom"; // Importa el componente Navigate
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importa los componentes de React Router
import RegisterEmployee from "./components/RegisterEmployee"; // Asegúrate de que la ruta sea correcta
import InicioEmpleado from "./components/InicioEmpleado"; // Componente de inicio
import Almacenes from "./components/Almacenes";
import RecepcionMercancia from "./components/RecepcionMercancia";
import EditarProducto from "./components/EditarProducto";
import GestionProveedores from "./components/GestionProveedores";
import AgregarProveedor from "./components/AgregarProveedor";
import GestionEmpleados from "./components/GestionEmpleados";
import Movimientos from "./components/Movimientos";
import OrdenesCompra from "./components/OrdenesCompra";
import Clientes from "./components/Clientes";
import Membresias from "./components/Membresias";
import Notificaciones from "./components/Notificaciones";
import Promociones from "./components/Promociones";

function App() {
  const [empleado, setEmpleado] = useState(null); // Estado global de empleado

  return (
    <Router>
      <Routes>
        {/* Ruta para mostrar el componente RegisterEmployee */}
        <Route path="/register-employee" element={<RegisterEmployee />} />
        <Route
          path="/inicioempleado"
          element={<InicioEmpleado setEmpleado={setEmpleado} />}
        />
        {/* Ruta para la página de inicio de empleados */}
        <Route path="/almacenes" element={<Almacenes />} /> {/* Nueva ruta */}
        <Route
          path="/recepcion-de-mercancia"
          element={<RecepcionMercancia />}
        />
        <Route path="/editar-producto/:id" element={<EditarProducto />} />{" "}
        {/* Nueva ruta */}
        <Route path="/gestion-proveedores" element={<GestionProveedores />} />
        <Route path="/agregar-proveedor" element={<AgregarProveedor />} />
        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/ordenes-de-compra" element={<OrdenesCompra />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/membresias" element={<Membresias />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route
          path="/gestion-empleados"
          element={
            empleado?.rol === "Administrador" ? (
              <GestionEmpleados empleado={empleado} />
            ) : (
              <Navigate to="/inicioempleado" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
