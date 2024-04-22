import Link from 'next/link';



const Grid_data = (curentItem) => {
    const {id,name,company,  image,}=curentItem;
  
  return (
    <div>
    
    <Link href={`/singleproducts/${id}`}>
    <div className=' mb-20 mx-3 lg:hover:p-1'>
        
                
            <img  className='lg:hover:p-1' src={image} alt="my-image" />
            <div className='flex justify-between mx-2'>
              <p className=' no-underline'style={{textDecoration:'none', listStyle:"none", }}>{name}</p>
              <p>{company}</p>
            </div>
            
        
        
    </div>
    </Link>
    </div>
    
  )
}

export default Grid_data
