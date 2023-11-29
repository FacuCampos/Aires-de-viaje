import { Login } from "../../components";
import { PeopleFill } from "react-bootstrap-icons";
import {CartWidget} from "../../components";
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className="searchInput-container">
      <h1 className="title">Aires de Viajes</h1>
      <input type="text" placeholder="🔍Search" />
      <p>
        <PeopleFill />
      </p>
      <Login />
      <CartWidget/>
    </div>
  );
};

export default SearchInput;
