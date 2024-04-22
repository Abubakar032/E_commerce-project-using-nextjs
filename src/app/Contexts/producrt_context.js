"use client"
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useHeroSecContext } from './hero_sec_context';
import { product_reducer } from '../Reducers/products_reducers';

const createcontext2 = createContext();

const initialstate = {
  filterproducts: [],
  productsdata: [],
  listView: true,
  gridView: false,
  sortValue: "lowest",
  companyValue:[],
  color:[],
  price:0,
  maxPrice:0,
  lowestPrice:0,
  load:true
  
};



const Product_context = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialstate);

  // console.log(state.price,"price")

  const price=state.price;
  

  const { products } = useHeroSecContext();

  console.log(products,"pro")

  const Apidata2 = () => {
    return dispatch({
      type: "API_DATA_2",
      payload: products,
    });
  };

  useEffect(() => {
    Apidata2();
  } ,[products] );

  const listviewfunc = () => {
    return dispatch({
      type: "LIST_FUNC",
    });
  };

  const gridViewfunc = () => {
    return dispatch({
      type: "GRID_FUNC",
    });
  };

  const sorting = (e) => {
    console.log("Sorting function called");
    let eventValue = e.target.value;
    console.log("Event Value:", eventValue);
  
    return dispatch({
      type: "SORTING_VALUE",
      payload: eventValue,
    });
  };
  

  useEffect(() => {
    dispatch({
      type: "SORT_DATA",
      payload: products,
    });
  }, [state.sortValue, products]);

  

  const searchDta = (e) => {
    let eventDta = e.target.value;
    return dispatch({
      type: "SEARCH_DATA",
      payload: products,
      payload2: eventDta,
    });
  };

  const Alldata = () => {
    return dispatch({
      type: "ALL_DATA",
      payload: products,
    });
  };


  



    const clickFilterItems = (category) => {
      return dispatch({
        type: "CLICK_FILTER_ITEMS",
        payload: products,
        payload2: category,
      });
    };

    const companySelect=((e)=>{
      const dataa=e.target.value;
      return dispatch({
        type:"COMAPNY_SELECT_DATA",
        payload:products,
        payload2:dataa
      })
      })
    
    useEffect(()=>{
       dispatch ({type:"ALL_COM_DATA",
      payload:products
      })
      
    },[])
    useEffect(()=>{
      dispatch ({type:"COLOR",
      payload:products
      })
    },[products])

    const filterColorData=(filter)=>{
      return dispatch({
        type:"COLOR_FILTER",
        payload:products,
        payload2:filter
      })
    }

    
    useEffect(()=>{
      dispatch ({type:"PRICE",
      payload:products
      })
    },[products])

    const filterRangeData = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      
      return dispatch({
        type: "RANGE_FILTER_DATA",
        payload: { name, value }
      });
    }


    useEffect(() => {
      
      dispatch({
        type: "RANGE_DATA", 
        payload: products,
        payload2:price
      });
    },[price]);
    
    

  return (
    <div>
      <createcontext2.Provider
        value={{ ...state, Apidata2, listviewfunc, gridViewfunc, sorting, clickFilterItems, searchDta, Alldata,companySelect,filterColorData ,filterRangeData}}
      >
        {children}
      </createcontext2.Provider>
    </div>
  );
};





const ProductContext = () => {
  return useContext(createcontext2);
};

export { Product_context, ProductContext, createcontext2 };
