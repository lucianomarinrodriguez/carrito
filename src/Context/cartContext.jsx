import { useState, createContext, useContext } from "react";

const cartContext = createContext()
export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}){
    //Declaración del array donde se guarda los productos del carrito
    const [cartList, setCartList] = useState([])

    //Declaración de la variable contadora del total de elementos del carrito
    const [cantCarrito, setCantCarrito] = useState(0);

    //Función para incrementar la etiqueta de cantidad de productos del carrito
    const actCarrito = (cantidad) => {
        setCantCarrito (cantCarrito+cantidad)
        console.log("agrego al carrito", cantCarrito)
      }

    //Función para agregar producto al carrito
    const agregarItem=(item)=>{
        setCartList([...cartList, item])
        console.log(cartList)
    }

    //Función para vaciar el carrito
    function vaciarCart(){
        setCartList([]);
        setCantCarrito(0);
    }

    //Función para eliminar un producto del Carrito
    const borrarItem = (id) => {
        let item = cartList.find(item => item.item.id === id);
        let index = cartList.indexOf(item);
        cartList.splice(index,1);
        setCantCarrito (cantCarrito-item.cantidad)
        setCartList([...cartList])
      }

    return(
        <cartContext.Provider value={{
            cartList,
            cantCarrito,
            agregarItem,
            vaciarCart,
            borrarItem,
            actCarrito,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider