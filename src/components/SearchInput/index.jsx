import { Login } from ".."
import "./SearchInput.css"
import { PeopleFill } from 'react-bootstrap-icons'

const SearchInput = () => {
  return (
    <div className="container-Search">

      <input type="text" placeholder="🔍Search" />
      <button type="submit">Buscar</button>
      <p><PeopleFill /> </p>
      <Login />
    </div>
  )
}

export default SearchInput