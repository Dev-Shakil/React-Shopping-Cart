import {createContext} from "react"
import './App.css';
import Cart from './components/Cart/Cart';
import Context, { CartContext } from "./components/Context";
import {Product} from "./components/Product"

function App() {
  return (
    <div className="App">
      <Context/>
    </div>
  );
}

export default App;
