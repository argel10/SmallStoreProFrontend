import styles from "./Button.module.css";

interface Props {
  name: string;
  onClick?: () => void;
}

const ButtonCnt = ({ name, onClick }: Props) => {
  return (
    <div className={styles.btn_cnt}>
      <button onClick={onClick} type="submit">
        {name}
      </button>
    </div>
  );
};

export default ButtonCnt;
