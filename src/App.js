import { createContext } from 'react';
import CartContextProvider from './Context/cartContext';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//export const cartContext = createContext()

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Main/>
      </div>
    </CartContextProvider>
  );
}

export default App;
