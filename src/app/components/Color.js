"use client"
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Add_to_cart_conetxt_data } from '../Contexts/add_to_cart_context';
import Link from 'next/link';

const Colors = ({ color = [], id ,stock, product }) => {
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [statee, setstate]=useState(1)
const {add_card}=Add_to_cart_conetxt_data();
  const decrement=()=>{

        statee>1?setstate(statee -1):setstate(1)
  }
  

  const increment=()=>{
    statee<stock?setstate(statee+1):setstate(stock)
  }

  return (
    <>
    <div className='flex'>
      <div>
        <p>Colors: </p>
      </div>
      <div>
        {color.map((currentColor, index) => (
          <button
            key={index}
            className='mx-4 rounded-full h-6 w-6'

            onClick={() => setSelectedColor(currentColor)}
            style={{ background: currentColor }}
          >
            {currentColor === selectedColor && <CheckIcon className='text-white' />}
          </button>
        ))}
      </div>
      

    </div>
    <h1 className='flex'> <RemoveIcon onClick={decrement} className='mt-3 mx-3 bg-red-600' /> {statee} <AddIcon className='mt-3 mx-3 bg-green-600' onClick={increment} /></h1>
    <Link href='/Add_to_cart' onClick={()=>add_card(id,selectedColor ,stock ,product, statee)} >
<button type="button" className='bg-red-600 text-black p-2 rounded-xl mt-3   hover:bg-opacity-80 border font-bold' >Add to cart</button>
       
    </Link>
       
  
    
</>
  );
};

export default Colors;
