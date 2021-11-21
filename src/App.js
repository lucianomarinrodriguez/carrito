import CartContextProvider from './Context/cartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';

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
