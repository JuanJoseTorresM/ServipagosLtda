import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.jpg";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <img src={Logo} alt="Logo" className="navbar-logo" width="20%" />

                    <NavLink className="btn btn-tertiary" to="/">Inicio</NavLink>
                    <NavLink className="btn btn-tertiary" to="/nosotros">Nosotros</NavLink>
                    <NavLink className="btn btn-tertiary" to="/contacto">Contacto</NavLink>


                </div>
            </nav>


        </>
    )
}
export default Navbar;