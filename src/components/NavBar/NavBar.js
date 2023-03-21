import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {


    return (
        <div className="encabezado">
            <NavLink to="/">
                <img className="logo" src="./imagenes/GranLector.png" alt="" />
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
            <NavLink to="/cart"><CartWidget /></NavLink>
        </div>
    );
};

export default NavBar;