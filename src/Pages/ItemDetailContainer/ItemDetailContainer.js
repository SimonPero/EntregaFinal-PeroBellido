import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../../Data/Productos'
const ItemDetailContainer = () => {
  const {id}=useParams()
  const  getProducts = new Promise((res, rej)=>{
    setTimeout(()=>{
      const findProduct=products.find(Item => Item.id == id)
      res(findProduct)
    }, 1000)
  })

  useEffect(()=>{
    getProducts
    .then(response => {console.log(response)})
    .catch((error)=> {console.log(error)})
  }, [])
  return (
    <div></div>
  )
}
export default ItemDetailContainer

