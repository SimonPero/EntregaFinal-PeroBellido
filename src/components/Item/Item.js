import './Item.css'

const Item = ({ product }) => {
    return (
        <div className='card color-carta ' >
            <div className='row g-0'>
                <div className='col-sm-4' >
                    <img className='tamano-imagen img-fluid rounded-start' alt={product.nombre} src={`/imagenes/${product.imgUrl}`} />
                </div>
                <div className='col-sm-8'>
                    <div className='card-body'>
                        <span className='span'>
                            <h5 className='card-title  overflow-hidden text-nowrap text-truncate'>{product.nombre}</h5>
                        </span>
                        <p className='card-text overflow-hidden text-nowrap text-truncate'>Stock: {product.capitulos}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item