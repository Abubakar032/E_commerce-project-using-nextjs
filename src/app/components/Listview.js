"use client"
import React from 'react'
import { ProductContext } from '../Contexts/producrt_context';
import Link from 'next/link';


const Listview = () => {
  const { productsdata } = ProductContext();

  if (!productsdata) {
    // Add loading state or return null if data is not available yet
    return null;
  }

  return (
    <div className='mb-10'>
      {productsdata.map((currentItem) => {
        const { image, category, _id, price, description, name } = currentItem;

        return (
          <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-3 border' key={id}>
            <div className='hover:p-1'>
              <Link href={`/singleproducts/${_id}`}>
                <img src={image} alt=""  className='h-full'/>
              </Link>
            </div>
            <div className='lg:ml-5 md:ml-5 '>
              <h5 className='text-gray-500 '>{name}</h5>
              <p>Category: {category}</p>
              <p>{description.slice(0, 200)}</p>
              <p>Price: {price}</p>
              <Link href={`/singleproducts/${id}`}>
              <button className='btn btn-primary'>View Detail</button>
              </Link>
                          </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listview;
