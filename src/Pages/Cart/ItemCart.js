
import Counter from "../../components/Counter/Counter"
import { useState, useEffect} from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity) 
    const {updateItem}=useContext(CartContext)

    useEffect(()=>{
    updateItem(product.id, quantity)
    },[quantity])
    return (
        <>
            <span className='span'>
                <h5 className='card-title  overflow-hidden text-nowrap text-truncate'>{product.nombre}</h5>
                <h5 className='card-title  overflow-hidden text-nowrap text-truncate'>Comprando: {product.quantity}</h5>
            </span>
            <p className='card-text overflow-hidden text-nowrap text-truncate'>${product.precio * product.quantity}</p>
            <p className='card-text overflow-hidden text-nowrap text-truncate'>Stock: {product.capitulos}</p>
            <Counter count={quantity} setCount={setQuantity} max={product.capitulos} />
        </>
    )
}
export default ItemCart
