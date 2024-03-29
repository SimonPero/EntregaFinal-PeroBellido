import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useState, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ detail }) => {
  const navigate = useNavigate()
  const { addItem } = useContext(CartContext)
  const [counter, setCounter] = useState(1)
  console.log(detail)
  if(detail.capitulos === 0){
    alert("no hay stock disponible de este producto, vuelva más tarde.")
    return 
  } else if (detail.capitulos === undefined){
    return <div style={{color: 'azure'}} >Producto inexistente</div>  }

  return (
    <div className="containerVentas">
      <div>
      <img className='tamano img-fluid rounded-start' alt={detail.nombre} src={`/imagenes/${detail.imgUrl}`} />
      <h1 className='colorLetra '> {detail.nombre}</h1>
      <h2 className='colorLetra'> Unidades: {detail.capitulos}</h2>
       <p className='colorLetra'>Precio:{detail.precio}$</p>
       <p className='colorLetra'>{detail.description}</p>
      <Counter count={counter} setCount={setCounter} max={detail.capitulos} />
      <div className="containerVentas2">
        <Button variant="primary" size="sm" onClick={() => navigate('/')}>
          seguir comprando
        </Button>
        <Button variant="primary" size="sm" onClick={() => addItem(detail, counter)}>
          Agregar al carrito
        </Button>
        <Button variant="primary" size="sm" onClick={() => navigate('/cart')}>
          ir al carrito
        </Button>
        </div>
      </div>
    </div>

  )
}

export default ItemDetail
