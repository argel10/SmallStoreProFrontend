import { Button } from "../../Shared";
import Breadcrumbs from "../../Shared/Breadcumbs";
import ButtonCnt from "../../Shared/ButtonCnt";
import Search from "../../Shared/Search";
import styles from "./HeaderPage.module.css";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  title: string;
  items: string[];
  nameButton: string;
  searchTerm: string;
  handleSearch: any;
}

const HeaderPage = ({
  setOpenModal,
  openModal,
  title,
  nameButton,
  items,
  searchTerm,
  handleSearch,
}: Props) => {
  const handleButtonClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className={styles.container_header_page}>
      <div className={styles.header_post}>
        <h3>{title}</h3>
        <Breadcrumbs items={items} />
      </div>
      <div className={styles.submenu}>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <ButtonCnt name={nameButton} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default HeaderPage;
