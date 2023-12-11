import { AirplaneFill, BriefcaseFill, BuildingsFill, CarFrontFill, HouseFill, HousesFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"


const LinksSection = () => {
    return (
        <>
            <Link to={'/'} className='navLink'>
                <HouseFill className='navIcon' />
                Home
            </Link>
            <Link to={"/vuelos"} className='navLink'>
                <AirplaneFill className='navIcon' />
                Vuelos
            </Link>
            <Link to={"/hospedajes"} className='navLink'>
                <BuildingsFill className='navIcon' />
                Hospedajes
            </Link>
            <Link to={'/alquileres'} className='navLink'>
                <HousesFill className='navIcon' />
                Alquileres
            </Link>
            <Link to={'/paquetes'} className='navLink'>
                <BriefcaseFill className='navIcon' />
                Paquetes
            </Link>
            <Link to={'/autos'} className='navLink'>
                <CarFrontFill className='navIcon' />
                Autos
            </Link>
        </>
    )
}

export default LinksSection