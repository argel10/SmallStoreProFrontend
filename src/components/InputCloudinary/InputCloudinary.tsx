import { ChangeEventHandler } from "react";

import styles from "./inputcloudinary.module.css";

interface Props {
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const InputCloudinary = ({ handleChange }: Props) => {
  return (
    <div className={styles.container_input_cloudinary}>
      <div className={styles.formbold_file_input}>
        <input name="image" id="image" type="file" onChange={handleChange} />
        <label htmlFor="image">
          <div>
            <span className={styles.formbold_drop_file}>Carga tu imagen</span>
            <span className={styles.formbold_browse}>Examinar</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputCloudinary;
