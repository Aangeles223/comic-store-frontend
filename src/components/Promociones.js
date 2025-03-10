import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaFileExcel,
  FaEdit,
  FaTrash,
  FaTags,
  FaHome,
  FaShoppingCart,
  FaBoxOpen,
  FaTruck,
  FaUsers,
  FaChevronUp,
  FaChevronDown,
  FaUserCircle,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const Promociones = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [menuUsuarioVisible, setMenuUsuarioVisible] = useState(false);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const toggleMenuUsuario = () => {
    setMenuUsuarioVisible(!menuUsuarioVisible);
  };

  const localEmpleado = {
    nombre: "Juan Pérez",
    correo: "juanperez@example.com",
  };

  const [promociones, setPromociones] = useState([
    {
      id: 1,
      nombre: "Descuento 20%",
      descripcion: "Aprovecha un 20% de descuento en todas las compras",
      tipo: "Descuento %",
      fechaInicio: "2025-03-01",
      fechaFin: "2025-03-15",
    },
    {
      id: 2,
      nombre: "2x1 en Cómics",
      descripcion: "Compra un cómic y llévate otro gratis",
      tipo: "2x1",
      fechaInicio: "2025-03-10",
      fechaFin: "2025-03-20",
    },
    {
      id: 3,
      nombre: "Producto Gratis",
      descripcion: "Recibe una figura de colección en compras mayores a $1000",
      tipo: "Producto gratis",
      fechaInicio: "2025-03-05",
      fechaFin: "2025-03-25",
    },
  ]);

  return (
    <div className="promociones-page">
      <nav className="sidebar">
        <div className="logo-container">
          <img
            src="/images/logo.png"
            alt="Logo Comics Planet"
            className="logo"
          />
          <h2 className="sidebar-title">Comics Planet</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-item" onClick={() => navigate("/inicioempleado")}>
            <FaHome className="icon" />
            <span className="menu-text">Inicio</span>
          </li>

          {/* Menú desplegable de Clientes */}
          <li className="menu-item" onClick={() => toggleSubmenu("clientes")}>
            <div className="menu-button">
              <FaShoppingCart className="icon" />
              <span className="menu-text">Clientes</span>
              {activeSubmenu === "clientes" ? (
                <FaChevronUp className="arrow-icon" />
              ) : (
                <FaChevronDown className="arrow-icon" />
              )}
            </div>
          </li>
          <ul
            className={`submenu ${
              activeSubmenu === "clientes" ? "visible" : ""
            }`}
          >
            <li onClick={() => navigate("/clientes")}>Lista de Clientes</li>
            <li onClick={() => navigate("/membresias")}>Membresías</li>
            <li onClick={() => navigate("/notificaciones")}>Notificaciones</li>
            <li onClick={() => navigate("/promociones")}>Promociones</li>
          </ul>

          {/* Menú de Inventarios */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("inventarios")}
          >
            <div className="menu-button">
              <FaBoxOpen className="icon" />
              <span className="menu-text">Inventarios</span>
              {activeSubmenu === "inventarios" ? (
                <FaChevronUp className="arrow-icon" />
              ) : (
                <FaChevronDown className="arrow-icon" />
              )}
            </div>
          </li>
          <ul
            className={`submenu ${
              activeSubmenu === "inventarios" ? "visible" : ""
            }`}
          >
            <li onClick={() => navigate("/almacenes")}>Almacenes</li>
            <li onClick={() => navigate("/recepcion-de-mercancia")}>
              Recepción de Mercancía
            </li>
            <li onClick={() => navigate("/movimientos")}>Movimientos</li>
          </ul>

          {/* Proveedores */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("proveedores")}
          >
            <div className="menu-button">
              <FaTruck className="icon" />
              <span className="menu-text">Proveedores</span>
              {activeSubmenu === "proveedores" ? (
                <FaChevronUp className="arrow-icon" />
              ) : (
                <FaChevronDown className="arrow-icon" />
              )}
            </div>
          </li>
          <ul
            className={`submenu ${
              activeSubmenu === "proveedores" ? "visible" : ""
            }`}
          >
            <li onClick={() => navigate("/gestion-proveedores")}>
              Gestión de Proveedores
            </li>
            <li onClick={() => navigate("/ordenes-de-compra")}>
              Órdenes de Compra
            </li>
          </ul>

          {/* Gestión de Empleados */}
          <li className="menu-item" onClick={() => toggleSubmenu("empleados")}>
            <div className="menu-button">
              <FaUsers className="icon" />
              <span className="menu-text">Gestión de Empleados</span>
              {activeSubmenu === "empleados" ? (
                <FaChevronUp className="arrow-icon" />
              ) : (
                <FaChevronDown className="arrow-icon" />
              )}
            </div>
          </li>
          <ul
            className={`submenu ${
              activeSubmenu === "empleados" ? "visible" : ""
            }`}
          >
            <li onClick={() => navigate("/gestion-empleados")}>Empleados</li>
          </ul>
        </ul>

        {/* Avatar en la esquina inferior */}
        <div className="user-profile" onClick={toggleMenuUsuario}>
          <FaUserCircle className="user-avatar" />
          <span className="user-name">{localEmpleado.nombre}</span>
        </div>
        {/* Menú desplegable del usuario */}
        {menuUsuarioVisible && (
          <div className={`user-menu ${menuUsuarioVisible ? "visible" : ""}`}>
            <p>
              <FaUserCircle /> {localEmpleado.nombre}
            </p>
            <p>
              <FaEnvelope /> {localEmpleado.correo}
            </p>
            <button className="logout-button">
              <FaSignOutAlt /> Cerrar sesión
            </button>
          </div>
        )}
      </nav>

      {/* Encabezado con Botón */}
      <div className="encabezado">
        <h2>
          <FaTags className="icono-titulo" /> Gestión de Promociones
        </h2>
        <button className="btn-crear">
          <FaPlus /> Crear Promoción
        </button>
      </div>

      {/* Buscador */}
      <div className="buscador">
        <FaSearch className="icono-busqueda" />
        <input
          type="text"
          placeholder="Buscar por nombre de promoción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla de Promociones */}
      <div className="tabla-container">
        <table className="promociones-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {promociones
              .filter((promo) =>
                promo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((promo, index) => (
                <tr key={promo.id}>
                  <td>{index + 1}</td>
                  <td>{promo.nombre}</td>
                  <td>{promo.descripcion}</td>
                  <td>{promo.tipo}</td>
                  <td>{promo.fechaInicio}</td>
                  <td>{promo.fechaFin}</td>
                  <td className="acciones">
                    <button className="btn-editar">
                      <FaEdit />
                    </button>
                    <button className="btn-eliminar">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Promociones;
