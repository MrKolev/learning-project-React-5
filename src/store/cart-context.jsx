import React from "react";

const CartContextComponent = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export const CartProvider = (props) => {
    const addItemToCartHandler = item => { };

    const removeItemFromCartHandler = id => { };

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContextComponent.Provider value={CartContext}>
            {props.children}
        </CartContextComponent.Provider>
    )
}