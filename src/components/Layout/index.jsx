import { Footer, Navbar, SearchInput } from "../../components"

const Layout = ({children}) => {
    return(
        <>
            <SearchInput/>
            <Navbar/>
            
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout