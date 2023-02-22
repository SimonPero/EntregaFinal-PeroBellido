import Item from "../Item/Item"
import './ItemList.css'
import { Link }from 'react-router-dom'
const ItemList = ({productList}) => {
    return(
    <ul className="container">
    
        {
            productList.map((product)=>(
                <li className="ordenar" key={product.id}> 
                    <Link to={`/Item/${product.id}`}>
                    <Item product={product}/>
                    </Link>
                </li>
            ))
        }
    
    </ul>
    )
}

export default ItemList