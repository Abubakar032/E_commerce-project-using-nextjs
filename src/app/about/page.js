"use client"
import Link from 'next/link';
import FeatureProducts from '../components/Feature_products';

const About = () => {
  return (
    <>
    <div className='  mb-56 lg:mb-1 pt-24'>
        <div className='m-auto w-4/5'  >
        <div className='grid lg:grid-cols-2  h-96      gap-3  my-8'>
      <div className=' '>
      <p>About Us </p>
        <h1>AthleticEdge  Eccommerce </h1>
        <p>The sportswear market is growing rapidly, driven by increasing health consciousness and a surge
in sports and fitness activities. However, many existing online platforms fail to provide a userfriendly and comprehensive shopping experience. Our project, AthleticEdge, seeks to address
this gap by developing an intuitive and efficient mobile and web-based storefront tailored for
sportswear. This platform will leverage modern web technologies and mobile frameworks to
ensure accessibility, performance, and scalability.
</p>
        <div className=' grid sm:place-items-center '>
            <Link href="/products" ><button className=' btn btn-primary bg-blue-500'>check now</button></Link>
        
        </div>
      </div>
      <div className='  float-right '>
        <img  className='  h-[400px] w-full shadow bg-center bg-cover'  src="f2.jpg" alt="about/image" />
      </div>
    </div>
    </div>
    <FeatureProducts />
    </div>

    
  
    </>
  )
}

export default About
