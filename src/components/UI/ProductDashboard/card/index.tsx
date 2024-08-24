import { useState } from "react";
import "./card.css";
import { DivisaFormater } from "../../../../utilities/divisa-formater";
import { Producto } from "../../../../types/producto";

const CardProduct = ({
  producto,
  addToCart,
}: {
  producto: Producto;
  addToCart: (producto: Producto) => void;
}) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // Llamar a la función addToCart del componente padre
    addToCart(producto);

    // Actualizar el estado para mostrar el mensaje "Added !"
    setAddedToCart(true);

    // Restaurar el estado después de cierto tiempo
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Limitar la longitud del nombre del producto
  const maxNombreLength = 20; // Establece el número máximo de caracteres que deseas mostrar
  const truncatedNombre =
    producto.nombre.length > maxNombreLength
      ? producto.nombre.substring(0, maxNombreLength) + "..."
      : producto.nombre;

  return (
    <div
      className={`card ${addedToCart ? "added" : ""}`}
      onClick={handleAddToCart}
    >
      <div className="image">
        <img src="logo.png" alt="image" />
      </div>
      <span className="title">{truncatedNombre}</span>
      <span className="price">{DivisaFormater(producto.precio_de_venta)}</span>
    </div>
  );
};

export default CardProduct;
