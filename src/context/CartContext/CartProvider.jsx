import { children } from "react";
import { CartContext } from "./CartContext";

export const CartProvider =({Children})=>{
    const[cart, setCart]= useState([])

    const exists = (id) => {
        const exists = cart.some(p => p.id === id);
        return exists;
    };

    const addItem = (item) => {
        if(exists(item.id)){
            alert("el producto ya existe en el carrito")
            return;
        }
        setCart([...cart,item]);
        alert(`${item.name} agregado`);
    };

    const clearCart=()=>{
        setCart([])
    };

    const getTotalItems=()=>{
        if(cart.lenght){
            return cart.lenght;
        }
    };

    const values={
        cart, 
        addItem,
        clearCart,
        getTotalItems
    };


    return <CartContext.Provider value={(values)}>{children}</CartContext.Provider>;
}