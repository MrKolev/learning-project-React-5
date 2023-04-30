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
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemsIndex];
        
        let updateItems;

        if(existingCartItem){
           const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updateItems = [...state.items];
            updateItems[existingCartItemsIndex] = updateItem;
        }else{
            updateItems = state.items.concat(action.item)
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        }
    }

    if (action.type === "REMOVE") {
        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemsIndex];
        

        let updateItems;

        if(existingCartItem.amount === 1){            
            updateItems= state.items.filter(item => item.id !== action.id)
        } else {
           const updateItem = {...existingCartItem, amount: existingCartItem.amount -1}
           updateItems = [...state.items];
           updateItems[existingCartItemsIndex] = updateItem;
        }

        const updateTotalAmount = state.totalAmount - existingCartItem.price
        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        }
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