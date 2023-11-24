import { Login } from "../../components";
import { PeopleFill } from 'react-bootstrap-icons';

const SearchInput = () => {
  return (
    <div className="searchInput-container">

      <input type="text" placeholder="🔍Search" />
      <button type="submit">Buscar</button>
      <p><PeopleFill /> </p>
      <Login />
    </div>
  )
}

export default SearchInput