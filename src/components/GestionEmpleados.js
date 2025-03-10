import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaBoxOpen,
  FaTruck,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
  FaSignOutAlt,
  FaEnvelope,
  FaEdit,
  FaUsers,
  FaUserPlus,
  FaToggleOn,
  FaToggleOff,
  FaTrash,
} from "react-icons/fa";
import "./GestionEmpleados.css";

const GestionEmpleados = ({ empleado }) => {
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [empleadoEditando, setEmpleadoEditando] = useState(null);
  const [menuUsuarioVisible, setMenuUsuarioVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [empleados, setEmpleados] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juanperez@example.com",
      rol: "Vendedor",
      activo: true,
    },
    {
      id: 2,
      nombre: "María López",
      email: "marialopez@example.com",
      rol: "Cajero",
      activo: true,
    },
    {
      id: 3,
      nombre: "Carlos Gómez",
      email: "carlosgomez@example.com",
      rol: "Administrador",
      activo: false,
    },
  ]);

  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "Vendedor",
    activo: true,
  });

  const localEmpleado = {
    nombre: "Juan Pérez",
    correo: "juanperez@example.com",
  };

  // ✅ Función para editar un empleado
  const handleEditarEmpleado = (empleado) => {
    setEmpleadoEditando(empleado);
    setNuevoEmpleado(empleado); // Cargar los datos en el formulario
    setModalOpen(true);
  };

  // ✅ Función para eliminar un empleado
  const handleEliminarEmpleado = (id) => {
    const confirmacion = window.confirm(
      "¿Seguro que deseas eliminar este empleado?"
    );
    if (confirmacion) {
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    }
  };

  // ✅ Manejo de cambios en el formulario
  const handleChange = (e) => {
    setNuevoEmpleado({ ...nuevoEmpleado, [e.target.name]: e.target.value });
  };

  // ✅ Función para abrir/cerrar submenús
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // ✅ Función para mostrar/ocultar el menú de usuario
  const toggleMenuUsuario = () => {
    setMenuUsuarioVisible(!menuUsuarioVisible);
  };

  // ✅ Función para cambiar el estado activo/inactivo de un empleado
  const toggleActivo = (id) => {
    setEmpleados(
      empleados.map((emp) =>
        emp.id === id ? { ...emp, activo: !emp.activo } : emp
      )
    );
  };

  // ✅ Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (empleadoEditando) {
      // Editar un empleado existente
      setEmpleados(
        empleados.map((emp) =>
          emp.id === empleadoEditando.id ? { ...emp, ...nuevoEmpleado } : emp
        )
      );
    } else {
      // Agregar un nuevo empleado
      setEmpleados([
        ...empleados,
        {
          ...nuevoEmpleado,
          id: empleados.length ? empleados[empleados.length - 1].id + 1 : 1,
        },
      ]);
    }

    // Limpiar el formulario y cerrar el modal
    setEmpleadoEditando(null);
    setNuevoEmpleado({
      nombre: "",
      email: "",
      password: "",
      rol: "Vendedor",
      activo: true,
    });
    setModalOpen(false);
  };

  return (
    <div className="empleados-page">
      {/* Sidebar - Menú Lateral */}
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
            <FaHome className="icon" />{" "}
            <span className="menu-text">Inicio</span>
          </li>

          {/* Menú desplegable de Clientes */}
          <li className="menu-item" onClick={() => toggleSubmenu("clientes")}>
            <div className="menu-button">
              <FaShoppingCart className="icon" />{" "}
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

          {/* Menú desplegable de Inventarios */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("inventarios")}
          >
            <div className="menu-button">
              <FaBoxOpen className="icon" />{" "}
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
            <li onClick={() => navigate("/movimientos")}>Movimientos</li>{" "}
            {/* 🔹 Nuevo apartado agregado */}
          </ul>

          {/* Proveedores */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("proveedores")}
          >
            <div className="menu-button">
              <FaTruck className="icon" />{" "}
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
            </li>{" "}
            {/* 🔹 Nuevo apartado agregado */}
          </ul>

          {/* 🔹 Gestión de Empleados */}
          <li className="menu-item" onClick={() => toggleSubmenu("empleados")}>
            <div className="menu-button">
              <FaUsers className="icon" />{" "}
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
            <li
              onClick={() => {
                console.log("Redirigiendo a Gestión de Empleados");
                navigate("/gestion-empleados");
              }}
            >
              Empleados
            </li>
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

      {/* 🔹 Contenedor del título y botón */}
      <div className="header-container">
        <h2>👥 Gestión de Empleados</h2>
        <button className="btn-agregar" onClick={() => setModalOpen(true)}>
          + Agregar Empleado
        </button>
      </div>

      {/* 🔹 Tabla mejor alineada */}
      <div className="table-wrapper">
        <table className="empleados-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, index) => (
              <tr key={empleado.id}>
                <td>{index + 1}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.email}</td>
                <td>********</td> {/* Solo muestra asteriscos por seguridad */}
                <td>{empleado.rol}</td>
                <td>
                  <button
                    className="btn-estado"
                    onClick={() => toggleActivo(empleado.id)}
                  >
                    {empleado.activo ? (
                      <FaToggleOn className="activo" />
                    ) : (
                      <FaToggleOff className="inactivo" />
                    )}
                  </button>
                </td>
                <td className="acciones">
                  <button
                    className="btn-accion editar"
                    onClick={() => handleEditarEmpleado(empleado)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn-accion eliminar"
                    onClick={() => handleEliminarEmpleado(empleado.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>🆕 Agregar Empleado</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={
                  empleadoEditando
                    ? empleadoEditando.nombre
                    : nuevoEmpleado.nombre
                }
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={
                  empleadoEditando
                    ? empleadoEditando.email
                    : nuevoEmpleado.email
                }
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={
                  empleadoEditando
                    ? empleadoEditando.password
                    : nuevoEmpleado.password
                }
                onChange={handleChange}
                required
              />
              <select name="rol" onChange={handleChange} required>
                <option value="Vendedor">Vendedor</option>
                <option value="Cajero">Cajero</option>
                <option value="Administrador">Administrador</option>
              </select>
              <button type="submit">
                {empleadoEditando ? "Guardar Cambios" : "Registrar Empleado"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionEmpleados;
