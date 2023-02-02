import './App.css';
import Padre from './components/Padre/Padre';
import Hijo from './components/Hijo/Hijo';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionComponent/>
        <ClassComponent/>
        <Padre hijo={Hijo}>
          <div>
          childrem
          </div>
          <div>
            hermano
          </div>
          </Padre>
      </header>
    </div>
  );
}

export default App;

