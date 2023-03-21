import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import CartProvider from '../../context/CartProvider';
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from '../../Pages/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from '../../Pages/ItemListContainer/ItemListContainer.jsx';
import Cart from '../../Pages/Cart/Cart';
import { Spinner } from 'react-bootstrap';
import NotFound from '../NotFound/NotFound';


function VariantsExample() {
  return (
    <>
    <Spinner animation="border" variant="light" />
    </>
  );
}
const alreadyLoad = () => {
    return(
        <BrowserRouter>
        <CartProvider>
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/notfound' element={<NotFound/>}/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
    )
}
const loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", height: "100vh" }}>
            {VariantsExample()} 
            <div> ...LOADING</div>

        </div>
    )
}

const RenderCondicional = () => {
    const [loading, setloading] = useState(true)
    const Component = loading ? loader : alreadyLoad
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 3000);
    })
    return (
        <>
            <Component />
        </>
    )
}
export default RenderCondicional