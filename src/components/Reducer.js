export const reducer = (state, action) => {
    if(action.type==="REMOVE_SINGLE_ITEM"){
        return {
            ...state,
            items:state.items.filter((currElm)=>{return currElm.id !== action.payload})
        };
    }
    if(action.type==="CLEAR_CART"){
        return {
            ...state,
            items:[],
        }
    }
    if(action.type==="INCRIMENT"){
       let UpdatedCart = state.items.map((currElm)=>{
            if(currElm.id===action.payload){
                return {
                    ...currElm,
                    quantity:currElm.quantity+1,
                }
            }
            return currElm;
       })
       return {...state,items:UpdatedCart}
    }
    if(action.type==="DECREMENT"){
        let updatedCart = state.items.map((curElem)=>{
            if(curElem.id===action.payload){
                return {
                    ...curElem,
                    quantity:curElem.quantity-1,
                }
            }
            return curElem;
        }).filter((curElem)=>{
           return curElem.quantity!==0; 
        })
        return {...state,items:updatedCart}
    }
    if(action.type==="GET_TOTAL"){
        let {totalItem,totalAmount} = state.items.reduce((accum, curVal)=>{
            let {quantity,price} = curVal;
            accum.totalItem += quantity;
            accum.totalAmount += price*quantity;
            return accum;
        },
        {totalItem:0,totalAmount:0})
        return {...state, totalItem,totalAmount}
    }
    return state;
}