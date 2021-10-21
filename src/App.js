import { createContext } from 'react';
import cartContextProvider from './Context/cartContext';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';

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
