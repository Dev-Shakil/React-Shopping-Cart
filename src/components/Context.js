import React, { createContext,useReducer, useEffect } from 'react'
import Cart from './Cart/Cart';
import {Product} from "./Product"
import { reducer } from './Reducer';
export const CartContext= createContext();
const initialState = {
    items:Product,
    totalAmount:0,
    totalItem:0
}


const Context = () => {
    const [state, dispatch] =useReducer(reducer, initialState);
    const removeItem = (id)=>{
        return dispatch({
            type:"REMOVE_SINGLE_ITEM",
            payload:id
        })
    }
    const clearCart = () => {
        return dispatch({
            type:"CLEAR_CART",
        })
    }
    const incriment = (id)=>{
        return dispatch({
            type:"INCRIMENT",
            payload:id
        } )
    }
    const decrement = (id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }
    useEffect(() => {
      dispatch({type:"GET_TOTAL"})
    }, [state.items])
    return (
        <div>
            <CartContext.Provider value={{...state, removeItem , clearCart, incriment, decrement}}>
                 <Cart/>
            </CartContext.Provider>
           
        </div>
    )
}

export default Context
