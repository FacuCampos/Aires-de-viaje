import { Counter, Footer, Navbar, SearchInput } from "../../components"

const Layout = ({children}) => {
    return(
        <>
            <SearchInput/>
            <Navbar/>
            <Counter stock={10} initial={1}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout