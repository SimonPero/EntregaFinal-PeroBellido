import { NavLink }from 'react-router-dom'
import "./NavBar.css"
import GranLector from "./../../assets/imagenes/GranLector.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="encabezado">
            <NavLink className={(estatus)=> estatus.isActive ? 'active' : 'inactive'} to="/">
            <img className="logo" src={GranLector} alt="" />
            </NavLink>
            <ul className="NavBarLista">
                <li>
                    <NavLink to="/category/Comics">Comics</NavLink>
                </li>
                <li>
                    <NavLink to="/category/Mangas">Mangas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/Manwhas">Manwhas</NavLink>
                </li>
            </ul>
            <CartWidget />0
        </div>
    )
}

export default NavBar