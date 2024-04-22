import React from 'react';
import { useHeroSecContext } from '../Contexts/hero_sec_context';
import Wrapeed from './Wrapeed';

const FeatureProducts = () => {
  const { isLoading } = useHeroSecContext();

  if (isLoading) {
    return (
      <div className='grid place-items-center w-screen h-36'>
        <p>plzz Check your connection</p>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip:rect(0,0,0,0)">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Wrapeed />
    </div>
  );
};

export default FeatureProducts;
