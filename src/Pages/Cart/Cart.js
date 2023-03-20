import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clear, removeItem, total} = useContext(CartContext);
  const db = getFirestore();
  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const querySnapshot = collection(db, "order");

    addDoc(querySnapshot, {
      buyer: {
        email: "test@test.com",
        name: "tomas",
        phone: "+12345621",
      },
      products: cart.map((product) => {
        return {
          nombre: product.nombre,
          precio: product.precio,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      total: total,
    })
      .then((response) => {
        alert(`Order with ID: ${response.id} has been created`);
        updateStocks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStocks = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);

      updateDoc(querySnapshot, {
        capitulos: product.capitulos - product.quantity,
      })
        .then(() => {
          console.log("Stocks updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <ul className="container-cart">
        {cart.map((item) => {
          return (
            <li className="ordenar overflow-hidden text-wrap text-truncate" key={item.name}>
              <div className='card color-carta ' >
                <div className='row g-0'>
                  <div className='col-sm-4' >
                    <img className='tamano-imagen img-fluid rounded-start' alt={item.name} src={`/imagenes/${item.imgUrl}`} />
                  </div>
                  <div className='col-sm-8'>
                    <div className='card-body'>
                      <ItemCart product={item}/>
                      <Button variant="primary" size="sm" onClick={() => removeItem(item.id)}>
                        X
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <div className="containerVentas2">
          {cart.length > 0 && (
            <Button variant="primary" size="sm" onClick={clear}>
              Vaciar Carrito
            </Button>
          )}
          {cart.length>0&&(
          <div>
          <Button variant="primary" size="sm" disabled={total === 0} onClick={createOrder}>
            Terminar Compra
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate("/")}>
            Seguir Comprando
          </Button>
          <span className="color">El total es de {total}</span>
          </div>
          )}
          {cart.length === 0 && <p className="color">No has realizado ninguna compra.</p>}
        </div>
      </ul>
    </div>
  );
};

export default Cart;