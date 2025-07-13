import { createContext } from "react";

/**
 * This function is used to create context for global state managememt.
 * From here we can add variable or functions which can be used inside the context.
 */
const CartContext = createContext({
    items:[],
    addItemToCart: () => {}
})

export default CartContext 