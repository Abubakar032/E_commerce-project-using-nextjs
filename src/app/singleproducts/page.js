import Link from 'next/link';

const Product = ({ _id, image,name,category }) => {
  return (
    <div>
   
        
      <div
key={_id}
className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
data-aos="fade-up"
>
{/* Product Image */}
<div className="relative w-full h-64 bg-gray-200">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-cover"
  />
</div>

{/* Product Details */}
<div className="p-6 text-center">
  <h3 className="text-lg font-semibold text-black">
    {name}
  </h3>
  <p className="text-sm text-gray-500 mt-2">
    {category}
  </p>
  <Link href={`/singleproducts/${_id}`}>
  <button className="mt-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition duration-300">
    View Details
  </button>
  </Link>

</div>
</div>
      
    </div>
  );
};

export default Product;
