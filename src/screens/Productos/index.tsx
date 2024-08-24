import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderPage from "../../components/UI/HeaderPage";
import styles from "./Productos.module.css";
import { Producto } from "../../types/producto";
import {
  eliminarUnProducto,
  obtenerProductos,
} from "../../servicios/Productos";
import Table from "../../components/container/Table";
import Empty from "../../components/container/Empty";
import FormCreateProduct from "./create";

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productos, setProductos] = useState<Producto[]>();

  const peticionObtenerEventos = async () => {
    const productos = await obtenerProductos();
    setProductos(productos);
  };

  const eliminarProductoPeticion = async (productoId: number) => {
    await eliminarUnProducto(productoId);
  };

  useEffect(() => {
    peticionObtenerEventos(); // se esta ejecutando la funcion de obtener eventos apenas inicie la vista
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  console.log(productos);
  return (
    <>
      <Header />
      <div className={styles.product_container}>
        <div className={styles.section_products}>
          <HeaderPage
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setOpenModal={setOpenModal}
            openModal={openModal}
            title="Dashboard Productos"
            nameButton="Nuevo"
            items={["Inicio", "Productos"]}
          />
          <div className={styles.table_councilor}>
            {productos!?.length > 0 ? (
              <Table
                data={productos!}
                headers={["Nombre", "Precio de venta", "Unidades disponibles"]}
                keys={["nombre", "precio_de_venta", "stock_actual"]}
                setItemSelected={() => ({})}
                onDelete={eliminarProductoPeticion}
         
              />
            ) : (
              <Empty
                title="Productos"
                copy="Registra tu primer producto dando click al boton de la parte inferior."
                image="/logo.png"
                open={openModal}
                setOpen={setOpenModal}
              />
            )}
          </div>
        </div>
      </div>
      <FormCreateProduct setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default Productos;
