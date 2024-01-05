import { Footer, LinksSection, Navbar} from "../../components"

const Layout = ({children}) => {
    return(
        <>
            <Navbar/>
            <LinksSection/>
            <main>
                {children}
            </main>
            <Footer/> 
        </>
    )
}

export default Layout