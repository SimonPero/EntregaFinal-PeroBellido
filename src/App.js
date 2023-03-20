import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCondicional from './components/RenderCondicional/RenderCondicional';
function App() {
  return (
    <div className="App">
      <RenderCondicional/> 
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

