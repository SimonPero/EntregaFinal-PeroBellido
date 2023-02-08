import Carrito from "./../../assets/imagenes/Carrito.png"
import "./CartWidget.css"

const CartWidget = ()=> {
    return (
        <div>
        <img  className="Tamaño-carrito" src={Carrito} alt="" />
        </div>
    )
}

export default CartWidget