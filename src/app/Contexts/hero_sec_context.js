"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { hero_sec_reducer } from '../Reducers/hero_sec_reducer';

const HeroSecContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  setLoading: false,
  singleProduct: {}, 
};

const apiUrl = 'https://api.pujakaitem.com/api/products?'; 

const HeroSecProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hero_sec_reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      console.log("apidata", products);
      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const fetchSingleProduct = async (url) => { 
    dispatch({ type: 'SET_LOAD' });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      console.log("singleprooooo", singleProduct)
      dispatch({ type: 'SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <HeroSecContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </HeroSecContext.Provider>
  );
};

const useHeroSecContext = () => useContext(HeroSecContext);

export { HeroSecProvider, useHeroSecContext }; 
