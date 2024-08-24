import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Usuario } from "../../types/user";
import Swal from "sweetalert2";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const user: Usuario = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  const HandleExit = () => {
    Swal.fire({
      icon: "success",
      title: "Cerrar sesion",
      showConfirmButton: true,
      timer: 1500,
    }).then((willLogout: any) => {
      if (willLogout) {
        localStorage.removeItem("usuario");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    });
  };

  return (
    <>
      <div className={styles.container_header}>
        <div className={styles.group_logo}>
          <img src="/logoh.svg" />
          <div className={styles.links_header}>
            <Link
              to={"/tienda"}
              className={styles.link}
              onClick={() => handleClick("tienda")}
            >
              Inicio
            </Link>

            <Link
              to={"/productos"}
              className={styles.link}
              onClick={() => handleClick("Productos")}
            >
              Productos
            </Link>
          </div>
        </div>
        <div className={styles.info_user}>
          <div className={styles.data_user}>
            <span>{user.nombre}</span>
            <p>{user.correo}</p>
          </div>
          <div className={styles.photo_user}>
            <img src={"/userDefault.svg"} />
          </div>
          <button className={styles.logout} onClick={() => HandleExit()}>
            Cerrar sesion
            <i className="bx bxs-exit"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
