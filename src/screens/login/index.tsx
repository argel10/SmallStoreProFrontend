import styles from "./Login.module.css";
import Field from "../../components/Field";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { iniciarSesionApi } from "../../servicios/usuarios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const loginPeticion = async () => {
    console.log("ENTRO");
    const usuario = await iniciarSesionApi(correo, contraseña);
    localStorage.setItem("usuario", JSON.stringify(usuario)); // Guardar en localStorage
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/tienda");
  };
  return (
    <div className={styles.container_login}>
      <div className={styles.section_right}>
        <div className={styles.container_form}>
          <div className={styles.header_form}>
            <h2>Bienvenido</h2>
            <p>
              Inicia sesion en tu cuenta, para empezar a usar los servicios de
              Sisventas
            </p>
          </div>
          <div className={styles.form}>
            <div className={styles.cnt_form}>
              <Field label="Correo">
                <Input
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </Field>
              <Field label="Contraseña">
                <Input
                  name="contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </Field>
              <button className={styles.btn_login} onClick={loginPeticion}>
                Iniciar Sesion
              </button>
            </div>
          </div>
          <div className={styles.footer_form}>
            <p>
              ¿No tienes cuenta?, no te preocupes,{" "}
              <Link className={styles.redirec_register} to="/registrarse">
                Registrate aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section_left}>
        <div className={styles.itemsUDC}>
          <img src="/logo.png" />
        </div>
      </div>
    </div>
  );
};

export default Login;
