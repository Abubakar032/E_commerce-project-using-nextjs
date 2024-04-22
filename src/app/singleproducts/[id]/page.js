"use client"
import React, { useEffect, useState } from 'react';
import { useHeroSecContext } from '@/app/Contexts/hero_sec_context';
import { useParams } from 'next/navigation';
import Star from '@/app/components/Star';
import Colors from '@/app/components/Color';

const url2 = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, setLoading } = useHeroSecContext();

  const [Image, setImage] = useState();

  useEffect(() => {
    fetchSingleProduct(`${url2}?id=${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProduct?.image && singleProduct.image.length > 0) {
      setImage(singleProduct.image[0].url);
    }
  }, [singleProduct?.image]);

  if (setLoading) {
    return (
      <div className='grid place-items-center w-screen h-screen'>
        <div className="inline-block h-8 w-8 fixed animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    );
  }

  const images = singleProduct.image || [];

  return (
    <>
      <div className='grid lg:grid-cols-2 py-16 m-auto w-5/6  pt-40'>
        <div className='grid  lg:grid-cols-2 place-items-center'>
          <div className='grid grid-cols-4 lg:grid-cols-1'>
            {images.map((current, index) => (
              <div key={index} className='py-1'>
                <img src={current.url} className='h-16 w-full px-2' onClick={() => setImage(current.url)} alt={current.id} />
              </div>
            ))}
          </div>
          <div>
            <img src={Image} alt='image' className='pr-4' />
          </div>
        </div>
        <div>
          <h>{singleProduct.name}</h>
          {/* Assuming Star component is defined */}
          <Star star={singleProduct.stars} color={singleProduct.colors} review={singleProduct.reviews} />
          <p>Price: {singleProduct.price}</p>
          <p>{singleProduct.description}</p>
          <p>Available: In stock</p>
          <p>ID: {singleProduct.id}</p>
          <p>Brand: {singleProduct.company}</p>
          <hr />
          {/* Assuming Colors component is defined */}
          <Colors color={singleProduct.colors} id={singleProduct.id} product={singleProduct} stock={singleProduct.stock} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
