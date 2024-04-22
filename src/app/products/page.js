"use client"
import React, {  useState } from 'react';
import Gridlist from '../components/Gridview';
import Listview from '../components/Listview';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import Products_sidebar from '../components/Product_sidebar';
import { ProductContext } from '../Contexts/producrt_context';





const Products = () => {
  
  const {
    productsdata,
    gridViewfunc,
    listView,
    gridView,
    listviewfunc,
    sorting,
    searchDta,
    
    load,
  } = ProductContext();

    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


  
    const close_sidebar=()=>{
      setIsMenuOpen(false)
    }

    

  
  if(load){
    return <p>Loading............</p>
  }

  return (
    
    <div className='m-auto  pt-32 w-4/5'>
    <div className='lg:flex w-full '>
      <div className='flex justify-between md:w-full lg:w-1/2'>
        <div> <button
              className="text-black focus:outline-none lg:hidden "
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
</div>
<div>
<input
            className='border  p-2 sm:w-full lg:mr-36 lg:mt-4 lg:w-56 '
            placeholder='Search'
            type='text'
            onChange={searchDta}></input>
</div>
<div className='flex items-center'>
          <MenuIcon
            className={`mx-2 cursor-pointer ${listView ? 'text-blue-400 bg-blue-950' : ''}`}
            onClick={listviewfunc}
          ></MenuIcon>

          <AppsIcon
            className={` cursor-pointer ${gridView ? 'text-blue-400 bg-blue-950' : ''}`}
            onClick={gridViewfunc}
          ></AppsIcon>
          
        </div>

      </div>

      <div className='flex justify-between lg:w-1/2 md:w-full md:mt-5 lg:mt-0'>
      <div className='text-gray-600 lg:ml-10 font-bold mt-4 lg:mt-0 '>{`${productsdata.length} Items Available`}</div>
      <div className='text-center'>
          <form action='' className='border p-2 mt-4  lg:mt-0'>
            <select
              className='outline-none'
              onChange={(e) => sorting(e)}
              name='sort'
              id='sort'
            >
              <option value='lowest'>Price (lowest)</option>
              <option value='highest'>Price (highest)</option>
              <option value='a-z'>Price (a-z)</option>
              <option value='z-a'>Price (z-a)</option>
            </select>
          </form>
        </div>
     

      </div>

    </div>



      <div className='lg:flex  '>
      <div className='fixed top-0 left-0'>
      <div className='lg:white  absolute lg:hidden bg-gray-200  h-screen overflow-y-auto left-0 top-20  md:w-4/5  '>
      
        {isMenuOpen? ( <div onClick={close_sidebar}> <Products_sidebar  toggleMenu={toggleMenu}  /></div>)  :""}
 
    </div>
    </div>
    <div className='hidden lg:flex'>
      
       <Products_sidebar />

  </div>

        <div className='mt-5    lg:ml-10 ' >
          {gridView ? <Gridlist /> : null}
          {listView  ? <Listview /> : null}
        </div>
      </div>
    </div>
  );
};

export default Products;
