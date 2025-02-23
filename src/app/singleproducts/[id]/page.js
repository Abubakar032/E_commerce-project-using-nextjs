"use client";
import React, { useEffect, useState } from "react";
import { useHeroSecContext } from "@/app/Contexts/hero_sec_context";
import { useParams } from "next/navigation";
import Star from "@/app/components/Star";
import Colors from "@/app/components/Color";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, setLoading } = useHeroSecContext();
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchSingleProduct(`http://localhost:6363/api/products/${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProduct?.images?.length > 0) {
      setSelectedImage(singleProduct.images[0]?.url);
    }
  }, [singleProduct]);

  if (setLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-5 lg:px-16 my-28">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="flex flex-col items-center">
          {/* Large Main Image */}
          <div className="border rounded-lg shadow-lg p-2">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Thumbnail Images (Below the Big Image) */}
          <div className="flex justify-center gap-3 mt-4">
            {singleProduct.images?.map((img, index) => (
              <img
                key={index}
                src={img.url}
                className={`h-16 w-16 object-cover cursor-pointer border-2 ${
                  selectedImage === img.url ? "border-orange-500" : "border-gray-300"
                } rounded-md transition-transform hover:scale-110`}
                onClick={() => setSelectedImage(img.url)}
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{singleProduct.name}</h1>
          <Star star={singleProduct.stars} review={singleProduct.reviews} />
          <p className="text-xl font-semibold text-orange-500">${singleProduct.price}</p>
          <p className="text-gray-600">{singleProduct.description}</p>
          <p className="font-medium text-green-600">Available: In Stock</p>
          <p className="text-gray-700">Brand: {singleProduct.company}</p>
          <hr className="my-4" />
          <Colors
            color={singleProduct.colors}
            id={singleProduct._id}
            product={singleProduct}
            stock={singleProduct.stock}
          />
        

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
