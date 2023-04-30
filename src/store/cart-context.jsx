import React, { useReducer } from "react";

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item =
        {
            id: "",
            name: "",
            amount: 0,
            price: 0
        }
    ) => { },
    removeItem: (id) => { }
});

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReduse = (state, action) => {
    if (action.type === "ADD") {
        const updateItem = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItem,
            totalAmount: updateTotalAmount,
        }
    }
    if (action.type === "REMOVE") {

    }

    return defaultCartState
}

export const CartProvider = (props) => {

    const [cartState, dispachCartAction] = useReducer(cartReduse, defaultCartState);

    const addItemToCartHandler = item => {
        dispachCartAction({ type: "ADD", item: item })
    };

    const removeItemFromCartHandler = id => {
        dispachCartAction({ type: "REMOVE", id: id })
    };

    const CartContextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={CartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}