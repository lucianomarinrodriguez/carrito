import { createContext } from 'react';
import cartContextProvider from './Context/cartContext';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//export const cartContext = createContext()

function App() {
  return (
    <cartContextProvider>
      <div className="App">
        <Main/>
      </div>
    </cartContextProvider>
  );
}

export default App;
