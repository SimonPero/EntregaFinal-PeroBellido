import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"



const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext)
  const db = getFirestore()
  const navigate = useNavigate()
  if(cart.length === 0){
    alert("no has realizado ninguna compra")
    setTimeout(() => {
      navigate('/')
    }, 1);
}
  const createOrder = (event) => {
    event.preventDefault()
    const db = getFirestore()
    const querySnapshot = collection(db, "order")


    addDoc(querySnapshot, {
      buyer: {
        email: "test@test.com",
        name: "tomas",
        phone: "+12345621"
      },
      products: cart.map((product) => {
        return {
          nombre: product.nombre,
          precio: product.precio,
          id: product.id,
          quantity: product.quantity

        }
      }),
      total: cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)

    })
      .then((response) => {
        alert(`orden con el ide: ${response.id} ha sido creada`)
        updateStocks()

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateStocks = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id)

      updateDoc(querySnapshot, {
        capitulos: product.capitulos - product.quantity
      })
        .then((res) => {
          alert("El stock de los productos ha sido actualizado")
        })
    })
  }
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="cart-caja" key={item.nombre}>
            <img className="cart-imagen" src={`/imagenes/${item.imgUrl}`} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <h3>{item.quantity}</h3>
            <h3>${cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)}</h3>
            <button className="cart-boton" onClick={() => removeItem(item.id)}>X</button>
          </div>
        )
      })}
      {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
      <button className="cart-boton" onClick={() => navigate('/')}>Seguir Comprando</button>
      <button className="cart-boton" onClick={createOrder}>Terminar Compra</button>
    </div>
  )
}

export default Cart