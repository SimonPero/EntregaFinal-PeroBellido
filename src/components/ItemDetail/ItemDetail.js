import './ItemDetail.css'

const ItemDetail = ({detail}) => {
  return( 
  <div className="containerVentas">
    <img className='tamano-imagen img-fluid rounded-start' alt={detail.nombre} src={detail.imgUrl} />
    <h1 className='colorLetra'> {detail.nombre}</h1>
    <h2 className='colorLetra'> Unidades: {detail.capitulos}</h2>
    <div className='ContainerVentas2'>
      Precio:1000$
    </div>
  </div>
  
  )  
}

export default ItemDetail
