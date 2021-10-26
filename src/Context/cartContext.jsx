import { useState, createContext, useContext } from "react";

const cartContext = createContext()
export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])
    //const [cartList, setCartList] = (1)
    const agregarItem=(item)=>{
        setCartList([...cartList, item])
    }

    function vaciarCart(){
        setCartList([])
    }

    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            vaciarCart,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider