import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer.js'
//S
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
    </div>
  );
}

export default App;

