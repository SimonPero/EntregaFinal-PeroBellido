import "./NavBar.css"
import GranLector from "./../../assets/imagenes/GranLector.png"
import CartWidget from "./../CartWidget/CartWidget"

const NavBar = ()=> {
    return (
        <div className="encabezado">
            <img  className="logo" src={GranLector} alt="" />
            <ul className="NavBar-lista">
                <li><a href="*">Comics </a></li>
                <li><a href="*">Mangas </a></li>
                <li><a href="*">Manwhas </a></li>
            </ul>
            <CartWidget/>0
        </div>
    )
}

export default NavBar