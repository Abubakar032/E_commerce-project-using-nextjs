"use client"
export const ADD_TO_CART_reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, selectedColor, stock, product, statee } = action.payload;
            // console.log(statee, "stafdsdf");
          
            const cartArray = state.cart || [];
          
            let existingCard = cartArray.find((currentitem) => currentitem.id === id + selectedColor);
          
            if (!existingCard) {
              let cartProduct = {
                id: id + selectedColor,
                amount: stock,
                color: selectedColor,
                name: product.name,
                image: product.image,
                price: product.price,
                max: product.stock,
              };
          
              return {
                ...state,
                cart: [...cartArray, cartProduct],
              };
            } else {
              let updatedCart = cartArray.map((currentitem) => {
                if (currentitem.id === id + selectedColor) {
                  let newAmount = currentitem.amount + stock;
                  if(newAmount>=currentitem.max){
                    newAmount=currentitem.max;
                  }
                  return {
                    ...currentitem,
                    amount: newAmount,
                  };
                } else {
                  return currentitem;
                }
              });
          
              return {
                ...state,
                cart: updatedCart,
              };
            }
          


  
        
  
      case "DELETE_ITEM":
        let updateDitem = action.payload.filter((currentitem) => {
          return currentitem.id !== action.payload2;
        });
        return {
          ...state,
          cart: updateDitem,
        };
  
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
  
      case "TOTAL_ITEM":
        let total = (state.cart || []).reduce((initial, current) => {
          let { amount } = current;
          initial = amount + initial;
          return initial;
        }, 0);
        return {
          ...state,
          totalCart: total,
        };
  
      case "TOTAL_AMOUNT":
        let totalamount = (state.cart || []).reduce((initial, current) => {
          let { price, amount } = current;
          initial = initial + price * amount;
          return initial;
        }, 0);
        return {
          ...state,
          totalAmount: totalamount,
        };
  
      case "DECREMENT":
        let update = (state.cart || []).map((current) => {
          if (current.id === action.payload) {
            let dec = current.amount - 1;
            if (dec <= 1) {
              dec = 1;
            }
            return {
              ...current,
              amount: dec,
            };
          } else {
            return current;
          }
        });
        return {
          ...state,
          cart: update,
        };
  
      case "INCREMENT":
        let setdec = (state.cart || []).map((currentitem) => {
          if (currentitem.id === action.payload) {
            let inc = currentitem.amount + 1;
            if (inc > currentitem.max) {
              inc = currentitem.max;
            }
            return {
              ...currentitem,
              amount: inc,
            };
          } else {
            return currentitem;
          }
        });
        return {
          ...state,
          cart: setdec,
        };
  
      default:
        return state;
    }
  };
  