import { Counter, Footer, NavBar, SearchInput } from "./components"




function App() {


  return (
    <>
    <SearchInput/>
    <NavBar/>
    <Counter stock={10} initial={1}/>
    <Footer/>


    </>
  
  )
}

export default App
