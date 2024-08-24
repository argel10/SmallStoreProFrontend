import { Button } from "../../Shared";
import ButtonCnt from "../../Shared/ButtonCnt";
import styles from "./Empty.module.css";

interface Props {
  title: string;
  copy: string;
  image: string;
  open: boolean;
  setOpen: Function;
}

const Empty = ({ title, copy, image, open, setOpen }: Props) => {
  return (
    <div className={styles.container_empty}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className={styles.options}>
        <ButtonCnt
          onClick={() => setOpen(!open)}
          name={`Añadir ${title.toLowerCase()}`}
        />
      </div>
    </div>
  );
};

export default Empty;
