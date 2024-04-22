"use client"
import React from 'react';
import { ProductContext } from '../Contexts/producrt_context';
import Grid_data from './Grid_data';

const Grid_view = () => {
  const { productsdata } = ProductContext();

  if (!productsdata) {
    return <p>Loading...</p>;
  }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3'>
      {productsdata.map((currentItem, index) => (
        <Grid_data key={currentItem.id} {...currentItem}></Grid_data>
      ))}
    </div>
  );
}

export default Grid_view;
