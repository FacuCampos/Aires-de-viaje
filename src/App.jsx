import { Counter, Footer, Navbar, SearchInput } from "./components"


function App() {


  return (
    <>
      <SearchInput/>
      <Navbar/>
      <Counter stock={10} initial={1}/>
      <Footer/>
    </>
  
  )
}

export default App
