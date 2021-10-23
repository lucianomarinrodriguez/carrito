import { useState, createContext, useContext } from "react";

const cartContext = createContext([])
export const useCartContext = () => useContext(cartContext)

function cartContextProvider({children}){
    const [cartList, setCartList] = useState([])
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
            vaciarCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContextProvider