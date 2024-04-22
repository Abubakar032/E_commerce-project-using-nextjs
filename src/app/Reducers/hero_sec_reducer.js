"use client"
export const hero_sec_reducer=(state, action)=>{

    switch (action.type){
        case  'IS_LOADING':
            return{
                ...state,
                isLoading:true
            }
            case "API_DATA":
                const featureData=action.payload.filter((curentItems)=>{
                    return curentItems.featured===true;
                })
                return{
                    ...state,
                    isLoading:false,
                    featureProducts:featureData,
                     products:action.payload,
                    
                    
                }
    
                case "SET_LOAD":
                    return{
                    
                        setLoading:true
                    
                }
                case "SINGLE_PRODUCT":
                    
                    return{
                        ...state,
                        setLoading:false,
                        singleProduct:action.payload,
                    }
                    
                default:
                    return state
    
                
                
                
    }
    }