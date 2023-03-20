import { CartContext } from "./CartContext"
import { useState } from "react"



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        isInCart(item.id)
        
        if (isInCart(item.id)) {
            const newCart = cart.map((product) => {
                if (product.id === item.id) {
                    product.quantity = product.quantity + quantity
                        
                    return product
                } else{
                    return product
                }
            })
            setCart(newCart)
        } else {
            const product = {
                id: item.id,
                nombre: item.nombre,
                capitulos: item.capitulos,
                genero: item.genero,
                quantity: quantity,
                category: item.category,
                popularidad: item.popularidad,
                imgUrl: item.imgUrl,
                precio:item.precio,
                total: cart.total=cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)
            }
            
            setCart([...cart, product])
           
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }

    const isInCart = (productId) => {
        if (cart.find((product) => product.id === productId)) {
            return true
        } else {
            return false
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear }}> {children}</CartContext.Provider>
    )
}

export default CartProvider