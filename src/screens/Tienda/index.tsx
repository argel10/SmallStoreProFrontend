import { useEffect, useState } from "react";
import styles from "./Shop.module.css";

import { Link } from "react-router-dom";
import { Producto } from "../../types/producto";
import Header from "../../components/Header";
import { obtenerProductos } from "../../servicios/Productos";
import CardProduct from "../../components/UI/ProductDashboard/card";

const Tienda = () => {
  const [productos, setProductos] = useState<Producto[]>();
  const peticionObtenerEventos = async () => {
    const productos = await obtenerProductos();
    setProductos(productos);
  };

  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const addToCart = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  useEffect(() => {
    peticionObtenerEventos(); // se esta ejecutando la funcion de obtener eventos apenas inicie la vista
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className={styles.container}>
          <div className={styles.shop_products}>
            <div className={styles.banner}>
              <img src="/banner/OFERTAS.png" alt="banner" />
            </div>
            <div className={styles.section_home}>
              <div className={styles.card_hor}>
                <div className={styles.item}>
                  <div className={styles.cart}>
                    <span>{carrito.length}</span>
                    <button>
                      <i className="bx bxs-cart"></i>
                    </button>
                  </div>
                  <div className={styles.info_a}>
                    <p>Carrito de compras</p>
                    <button
                      className={styles.link}
                      onClick={() => setOpenModal(!openModal)}
                    >
                      Comprar estos productos
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card_hor}>
                <div className={styles.item}>
                  <div className={styles.border_icon}>
                    <i className="bx bx-credit-card"></i>
                  </div>
                  <div className={styles.info_a}>
                    <p>Hasta 48 cuotas</p>
                    <Link className={styles.link} to={""}>
                      Ver mas...
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.card_hor}>
                <div className={styles.item}>
                  <div className={styles.border_icon}>
                    <i className="bx bxs-bank"></i>
                  </div>
                  <div className={styles.info_a}>
                    <p>Transferencia desde tu banco</p>
                    <Link className={styles.link} to={""}>
                      Ver mas...
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.card_hor}>
                <div className={styles.item}>
                  <div className={styles.border_icon}>
                    <i className="bx bxs-badge-dollar"></i>
                  </div>
                  <div className={styles.info_a}>
                    <p>Paga en efectivo</p>
                    <Link className={styles.link} to={""}>
                      Ver mas...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container_card} key={0}>
              {productos?.map((producto: Producto) => (
                <CardProduct
                  key={producto.productoId}
                  producto={producto}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tienda;
