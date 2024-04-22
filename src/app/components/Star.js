"use client"
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Star = ({ star, review }) => {
  const ringstar = Array.from({ length: 6 }, (elem, index) => {
    return (
      <span key={index}>
        {star > index + 1 ? (
          <StarIcon className=' text-yellow-400' key={index} />
        ) : star >= index + 0.5 ? (
          <StarHalfIcon className=' text-yellow-400' key={index} />
        ) : (
          <StarBorderIcon className=' text-yellow-400' key={index} />
        )}
      </span>
    );
  });

  return (
    <div>
      <p>{ringstar} ({review}: customers veiews)</p>
      
    </div>
  );
};

export default Star;
