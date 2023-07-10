import { useReducer } from "react";
import cartContext from "./cart-context";

//action is dispatched by you and state is the current state snapshot
const defaultCartState = {
    items:[],
    totalAmount: 0
}
const cartReducer = (state, action)=>{
    if(action.type === 'Add'){
       
        var updatedTotalAmount = state.totalAmount + (action.item.price*action.item.amount);
        const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id)
        const existingCartItem=state.items[existingCartItemIndex];
        let updatedItems;
        let updatedItem;
        if(existingCartItem){
            updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
            console.log('updated');
        }
        else{
            updatedItems = state.items.concat(action.item);
            console.log('Added');
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === 'Remove'){
        console.log("inside remove",action.id.id)
        let removeItemIndex = state.items.findIndex(item=>item.id === action.id.id)
        let itemToRemove = state.items[removeItemIndex];
        var updatedTotalAmount = state.totalAmount - (itemToRemove.price);
        console.log(removeItemIndex, itemToRemove)
        let updatedItem
        let updatedItems =[]
            console.log("inside if")
            if(itemToRemove.amount>1){
                console.log("here",itemToRemove.amount)
                updatedItem={
                    ...itemToRemove,
                    amount: itemToRemove.amount - 1
                }
                updatedItems=[...state.items];
                updatedItems[removeItemIndex]=updatedItem;
                console.log(itemToRemove.amount," updated count")
            }
            else{
                console.log("inside 2nd else")
                state.items.splice(removeItemIndex,1)
            }
          
            return{
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
    }
    return defaultCartState;
}

const CartProvider= props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item =>{
        dispatchCartAction({type: 'Add',item: item});
    }

    const removeItemFromCartHandler = id =>{
        dispatchCartAction({type: 'Remove',id: id});
    }

    const cartContextValues = {             // will be dynamic soon
        items:cartState.items,                    
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler ,
    } 
    return <cartContext.Provider value={cartContextValues}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;