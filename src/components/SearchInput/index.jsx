import { Search } from "react-bootstrap-icons";

const SearchInput = () => {
  return (
    <div className="searchInput-container">
      <input type="text" placeholder="Buscar"/>
      <button>
        <Search className="mb-1"/>
      </button>
    </div>
  );
};

export default SearchInput;
