import React, { useState } from 'react';
import { ProductContext } from '../Contexts/producrt_context';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useHeroSecContext } from '../Contexts/hero_sec_context';

const ProductsSidebar = ({ toggleMenu }) => {
  const { products } = useHeroSecContext();

  const {
    clickFilterItems,
    Alldata,
    companySelect,
    color,
    filterColorData,
    price,
    maxPrice,
    lowestPrice,
    filterRangeData,
  } = ProductContext();
  
  const [selectedColor, setSelectedColor] = useState('');
  const uniqueCompanies = products ? Array.from(new Set(products.map(product => product.company))) : [];
  const uniqueFilterData = products ? Array.from(new Set(products.map(product => product.category))) : [];

  return (
    <div className='border px-3 '>
      <div className="pl-3 ">
        <div className='flex justify-between '>
          <h5 className="mt-5 font-bold">Category</h5>
          <h1 className='hover:text-white md:hidden font-bold  lg-flex' onClick={toggleMenu}><CloseIcon /></h1>
        </div>
        <p className="cursor-pointer flex justify-between" onClick={Alldata}>All</p>
        {uniqueFilterData.map((currentItem, index) => (
          <p key={index} onClick={() => clickFilterItems(currentItem)} className='cursor-pointer font-bold mt-2 '>{currentItem}</p>
        ))}
      </div>
      <div>
        <div className='lg:pl-0 pl-3'>
          <h5 className="mt-10 font-bold">Company</h5>
          <form action="" className="form border">
          
            <select onChange={companySelect}>
            
              {uniqueCompanies.map((currentItem, index) => (
                
                <option key={index} className=' cursor-pointer' value={currentItem}>{currentItem}</option>
              ))}
            </select>
          </form>
        </div>
        <div className=''>
          <h5 className="mt-5">Colors</h5>
          <div className="flex">
            <div>
              <p className="cursor-pointer " onClick={Alldata}>All</p>
            </div>
            <div className="flex">
              {color.map((currentColor, index) => (
                <button key={index} onClick={() => filterColorData(currentColor)}>
                  <p className={`h-6 w-6 rounded-full mx-1 ${selectedColor === currentColor ? 'bg-black' : ''}`}
                    style={{ backgroundColor: currentColor }}>
                    {selectedColor === currentColor && <CheckIcon className="text-white" />}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='pl-3 lg:pl-0'>
          <p className="font-bold mt-2">Price: {price}</p>
          <input type="range" value={price} min={lowestPrice} max={maxPrice} name="price" onChange={filterRangeData} />
          <br />
          <button
            type="button"
            className="bg-red-600 mt-5 mb-24 p-2 rounded-xl hover:bg-white hover:text-red-500 border font-bold"
            onClick={Alldata}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsSidebar;
