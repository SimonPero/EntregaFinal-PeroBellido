import './ItemDetail.css'
import Counter from "../Counter/Counter"
import { useState} from "react"
const ItemDetail = ({ detail }) => {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="containerVentas">
      <img className='tamano-imagen img-fluid rounded-start' alt={detail.nombre} src={detail.imgUrl} />
      <h1 className='colorLetra'> {detail.nombre}</h1>
      <h2 className='colorLetra'> Unidades: {detail.capitulos}</h2>
      <div className='ContainerVentas2'>
        Precio:1000$
      </div>
      <Counter count={counter} setCount={setCounter} max={detail.capitulos} />
    </div>

  )
}

export default ItemDetail
