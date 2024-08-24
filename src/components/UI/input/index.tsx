import styles from "./Input.module.css";
import { ChangeEvent } from "react";

interface Props {
  name?: string;
  label: string;
  type?: string;
  value?: any;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputCnt = ({
  name,
  label,
  onChange,
  type,
  value,
  onBlur,
  disabled,
  required,
}: Props) => {
  return (
    <div className={styles.input_cnt}>
      <span className={styles.label_cnt}>{label}</span>
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

export default InputCnt;
