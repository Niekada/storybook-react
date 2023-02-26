import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

    const handleAddToCart = (cartItem) => {
        const hasEqualId = cItem => cItem.id === cartItem.id
        const alreadyInCartItem = cartItems.find(hasEqualId);

        if (alreadyInCartItem) {
            handleUpdateQuantity(cartItem.id, "increase");
        } else {
            const item = { ...cartItem, quantity: 1 };
            setCartItems((prevItems) => [...prevItems, item]);
        }

    };

    const resetCart = () => {
        setCartItems([])
    };

    const handleUpdateQuantity = (cartItemId, type) => {
        const increaseValue = type === "increase" ? 1 : -1;

        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === cartItemId 
                    ? { ...item, quantity: item.quantity + increaseValue } 
                    : item
            )
            .filter((i) => i.quantity)
        );
    };
    
    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, resetCart, handleUpdateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };