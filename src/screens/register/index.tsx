import styles from "./Register.module.css";
import Field from "../../components/Field";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registrarseApi } from "../../servicios/usuarios";
import Swal from "sweetalert2";

const Registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const crearUsuarioPeticion = async () => {
    setIsLoading(true);

    try {
      await registrarseApi({
        nombre,
        apellido,
        correo,
        contraseña,
        rol: "cliente",
      });

      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: "El usuario ha sido registrado con éxito.",
      });
    } catch (err: unknown) {
      let errorMessage = "Error desconocido";

      if (err instanceof Error) {
        errorMessage = err.message || "Error al registrar el usuario";
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container_login}>
      <div className={styles.section_left}>
        <div className={styles.itemsUDC}>
          <img src="/logo.png" />
        </div>
      </div>
      <div className={styles.section_right}>
        <div className={styles.container_form}>
          <div className={styles.header_form}>
            <h2>Crea tu cuenta</h2>
          </div>
          <div className={styles.form}>
            <form onSubmit={crearUsuarioPeticion}>
              <div className={styles.sec_form}>
                <div className={styles.inputs}>
                  <Field label="Nombre">
                    <Input
                      name="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Field>

                  <Field label="Apellido">
                    <Input
                      name="apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </Field>

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
                      type="password"
                    />
                  </Field>
                </div>
              </div>

              <button className={styles.btn_login} type="submit">
                {isLoading ? "Cargando..." : "Registrarse"}
              </button>
            </form>
          </div>
          <div className={styles.footer_form}>
            <p>
              ¿Ya tienes cuenta?, no te preocupes,{" "}
              <Link className={styles.redirec_register} to="/">
                inicia sesion aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
