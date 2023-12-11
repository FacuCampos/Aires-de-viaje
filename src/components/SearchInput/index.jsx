import { Login } from "../../components";
import { PeopleFill, Search } from "react-bootstrap-icons";
import {CartWidget} from "../../components";
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className="searchInput-container">
      <input type="text" placeholder="Buscar"/>
      <button>
        <Search/>
      </button>
    </div>
  );
};

export default SearchInput;
