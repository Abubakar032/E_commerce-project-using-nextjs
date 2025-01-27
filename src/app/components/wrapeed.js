import React from 'react';
import { useHeroSecContext } from '../Contexts/hero_sec_context';
import Product from '../singleproducts/page';

const Wrapeed = () => {
  const { featureProducts = [] } = useHeroSecContext();

  return (
    <div className='mt-52 lg:mt-2   ' >
      <div className='future m-auto mt-52 h-auto my-12 w-full bg-gray-300 '>
        <div className='m-auto mb-5' style={{ maxWidth: "80%" }}>
          check now
          <br />
          <h4>Our Feature Products</h4>
          <div className='grid lg:grid-cols-3 gap-4 h-auto'>
            {featureProducts.map((currentItem) => (
              <Product key={currentItem.id} {...currentItem}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapeed;
