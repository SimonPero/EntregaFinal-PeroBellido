import Item from "../Item/Item"
import './ItemList.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ productList }) => {
    return (
        <div className="ordenar-container">
            <ul className="container">
                {
                    productList.map((product) => (
                        <li className="ordenar overflow-hidden text-wrap text-truncate" key={product.id}>
                            <Link to={`/Item/${product.id}`}>
                                <Item product={product} />
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default ItemList