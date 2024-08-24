import styles from "./Table.module.css";
import { fromNow } from "../../../utilities/date-formater";
import { XCircle } from "react-feather";

interface DataRecord {
  [key: string]: any;
}

interface Props<T extends DataRecord> {
  data: T[];
  headers: string[];
  keys: string[];
  setItemSelected: Function;
  onDelete: (productoId: number) => void; // Nueva prop para la función de eliminar
}

const Table = <T extends DataRecord>({
  headers,
  data,
  keys,
  onDelete,
}: Props<T>) => {
  return (
    <>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>Acciones</th> {/* Nueva columna para las acciones */}
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.uuid}>
                {keys.map((key) => (
                  <td key={key}>
                    {key === "fecha_venta" ? fromNow(d[key]) : d[key]}
                  </td>
                ))}
                <td>
                  {/* Botón de eliminar */}
                  <button
                    onClick={() => onDelete(d.productoId)}
                    className={styles.deleteButton}
                  >
                    <XCircle />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
