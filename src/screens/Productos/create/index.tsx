import { useEffect, useState } from "react";
import { Modal } from "../../../components";
import ButtonCnt from "../../../components/Shared/ButtonCnt";
import InputCnt from "../../../components/UI/input";
import styles from "./FormCouncilor.module.css";
import { crearUnProducto } from "../../../servicios/Productos";
import { Usuario } from "../../../types/user";
import Swal from "sweetalert2";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
}

interface DataLocal {
  message: string;
  data: Usuario;
}

const FormCreateProduct = ({ setOpenModal, openModal }: Props) => {
  const [usuario, setUsuario] = useState<DataLocal>();
  const [nombre, setNombre] = useState("");
  const [precio_de_venta, setPrecioDeVenta] = useState<number>(0);
  const [categoria, setCategoria] = useState("");
  const [stock_actual, setStockActual] = useState<number>(0);

  useEffect(() => {
    // Obtener el objeto usuario desde localStorage y parsearlo
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(JSON.parse(storedUsuario) as DataLocal);
    }
  }, []);

  console.log("DATOS DEL LOCAL", usuario?.data);

  const crearProductoPeticion = async () => {
    const respuesta = await crearUnProducto({
      usuario: usuario?.data.usuarioId!,
      nombre,
      precio_de_venta,
      categoria,
      stock_actual,
      stock_inicial: stock_actual,
    });
    Swal.fire({
      icon: "success",
      title: "Producto creado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Modal isOpen={openModal} setIsOpen={setOpenModal} title={"Crear Producto"}>
      <div className={styles.form}>
        <form className={styles.cnt_form} onSubmit={crearProductoPeticion}>
          <div className={styles.form_items}>
            <InputCnt
              name="nombre"
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <InputCnt
              type="number"
              label="Precio de venta"
              value={precio_de_venta}
              onChange={(e) => setPrecioDeVenta(e.target.valueAsNumber)}
            />

            <InputCnt
              type="number"
              label="Unidades"
              value={stock_actual}
              onChange={(e) => setStockActual(e.target.valueAsNumber)}
            />

            <InputCnt
              type="text"
              label="Categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>

          <ButtonCnt name="Guardar" />
        </form>
      </div>
    </Modal>
  );
};

export default FormCreateProduct;
