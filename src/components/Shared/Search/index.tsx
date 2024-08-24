import styles from "./ItemsShared.module.css";

interface Props {
  searchTerm: string;
  handleSearch: any;
}

const Search = ({ searchTerm, handleSearch }: Props) => {
  return (
    <div className={styles.search}>
      <i className="bx bx-search-alt-2"></i>
      <input
        placeholder="Buscar..."
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
