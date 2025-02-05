import Link from 'next/link';

const Product = ({ id, image }) => {
  return (
    <div>
      <Link href={`/singleproducts/${id}`}>
        
          <div className='mb-20 mx-3'>
            <img src={image} alt="my-image" className='aspect-[3/2]' />
          </div>
        </Link>
      
    </div>
  );
};

export default Product;
