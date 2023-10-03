import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido !'}/>
    </div>
  );
}

export default App;
