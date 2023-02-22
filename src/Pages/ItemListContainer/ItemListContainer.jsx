 import {products} from '../../Data/Productos';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {
    const [productList, setProductList] =useState([])
    const {categoryId} = useParams()
    
   const getProducts = new Promise((res, rej) => {
    if (categoryId){
        const filteredProducts = products.filter((item) => item.category === categoryId)
        setTimeout(()=> {
            res(filteredProducts)
        }, 1000)
        
    }

    setTimeout(()=> {
        res(products)
    }, 1000)
   });

   useEffect(() => {
    getProducts
    .then((response) => {
        setProductList(response)
    })
    .catch((error) => {console.log(error)})
   }, [categoryId])

   return (
   <div>
    <ItemList productList={productList} />
    </div>
   )
}

export default ItemListContainer