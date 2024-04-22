"use client"
import { createContext,useContext, useEffect, useReducer } from "react";
import { ADD_TO_CART_reducer } from "../Reducers/add_to_cart_reducers";

const createcontext3=createContext();

const localStorageData=(()=>{
    
    let localdata=localStorage.getItem("abubakar");
    if(localdata===[]){
        return []
    }else{
        return JSON.parse(localdata)
    }
})


   
 

const Add_to_cart_Context=({children})=>{
     
const initiallstate={
    
    cart:localStorageData(),
       totalAmount:"",
       totalCart:"",
       shippingfee:5000
        }


    const [state, dispatch]=useReducer(ADD_TO_CART_reducer, initiallstate);

    const add_card=(id,selectedColor,stock,product, statee)=>{
       return dispatch({
        type:"ADD_TO_CART",
        payload:{id,selectedColor, stock,product}
       })
    }


    useEffect(()=>{
        dispatch({type:"TOTAL_ITEM" })
        dispatch({type:"TOTAL_AMOUNT" })
        localStorage.setItem("abubakar",JSON.stringify(state.cart))
    },[state.cart])

    const deleteItem=((id)=>{
        return dispatch({
            type:"DELETE_ITEM",
            payload:state.cart,
            payload2:id
        })
    })

    const clearcart=(()=>{
        return dispatch({
            type:"CLEAR_CART",
            
        })
    })

    const decrement=((id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    })

    
    const increment=((id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id
        })
    })

    return(
        <div>
            <createcontext3.Provider value={{...state,add_card,deleteItem,clearcart,decrement,increment}}>
                {children}
            </createcontext3.Provider>
        </div>
    )
}

const Add_to_cart_conetxt_data = () => {
    return useContext(createcontext3);
  };
  export { Add_to_cart_Context, Add_to_cart_conetxt_data };
  