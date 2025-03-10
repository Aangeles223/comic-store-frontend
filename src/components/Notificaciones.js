import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaBoxOpen,
  FaTruck,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaSearch,
  FaEye,
  FaCheck,
  FaTrash,
  FaBell,
  FaUserCircle,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "../styles/notificaciones.module.css";

const Notificaciones = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [notificaciones, setNotificaciones] = useState([]);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [menuUsuarioVisible, setMenuUsuarioVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const localEmpleado = {
    nombre: "Juan Pérez",
    correo: "juanperez@example.com",
  };

  // Simulación de notificaciones
  useEffect(() => {
    setNotificaciones([
      {
        id: 1,
        asunto: "Promoción Especial",
        mensaje: "Aprovecha un 20% de descuento en tu próxima compra.",
        fecha: "2025-03-08",
        estado: "No leído",
      },
      {
        id: 2,
        asunto: "Recordatorio de Pago",
        mensaje: "Tu membresía expira pronto, renueva ahora.",
        fecha: "2025-03-07",
        estado: "Leído",
      },
      {
        id: 3,
        asunto: "Nuevo Evento",
        mensaje: "Evento exclusivo para miembros este fin de semana.",
        fecha: "2025-03-06",
        estado: "No leído",
      },
    ]);
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const toggleMenuUsuario = () => {
    setMenuUsuarioVisible(!menuUsuarioVisible);
  };

  const showDetails = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const markAsRead = (id) => {
    setNotificaciones(
      notificaciones.map((n) => (n.id === id ? { ...n, estado: "Leído" } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotificaciones(notificaciones.filter((n) => n.id !== id));
  };
  return (
    <div className="notificaciones-page">
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
      <div className={styles.notificacionesPage}>
        {/* Encabezado con Botón */}
        <div className={styles.headerNotificaciones}>
          <h2>
            <FaBell className={styles.iconoTitulo} /> Gestión de Notificaciones
          </h2>
          <button className={styles.btnCrear}>
            <FaPlus /> Crear Notificación
          </button>
        </div>

        {/* Buscador */}
        <div className={styles.buscadorNotificaciones}>
          <FaSearch className={styles.iconoBusqueda} />
          <input
            type="text"
            placeholder="Buscar por asunto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabla de Notificaciones */}
        <div className={styles.tablaContainerNotificaciones}>
          <table className={styles.notificacionesTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Asunto</th>
                <th>Mensaje</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notificaciones
                .filter((n) =>
                  n.asunto.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((n, index) => (
                  <tr key={n.id}>
                    <td>{index + 1}</td>
                    <td>{n.asunto}</td>
                    <td className={styles.mensajeColumna}>{n.mensaje}</td>
                    <td>{n.fecha}</td>
                    <td>
                      <span
                        className={`${styles.estado} ${
                          styles[n.estado.replace(" ", "").toLowerCase()]
                        }`}
                      >
                        {n.estado}
                      </span>
                    </td>
                    <td className={styles.accionesNotificaciones}>
                      <button className={styles.btnVer}>
                        <FaEye />
                      </button>
                      <button className={styles.btnLeido}>
                        <FaCheck />
                      </button>
                      <button className={styles.btnEliminar}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
