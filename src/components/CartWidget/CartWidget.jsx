
import "./CartWidget.css"
import { useContext, useEffect, useState } from 'react'
import {CartContext} from "../../context/CartContext"

const CartWidget = ()=> {
    const {cart}= useContext(CartContext)
    const [ total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
    },[cart])

    return (
        <div className="CartWidget-caja">
        <img  className="Tamaño-carrito" src="./imagenes/Carrito.png" alt="" />
        {total}
        </div>
    )
}

export default CartWidget