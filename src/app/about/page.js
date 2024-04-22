"use client"
import Link from 'next/link';

const About = () => {
  return (
    <>
    <div className='  mb-56 lg:mb-1 pt-24'>
        <div className='m-auto w-4/5'  >
        <div className='grid lg:grid-cols-2  h-96      gap-3  my-8'>
      <div className=' '>
      <p>Welcome to </p>
        <h1>Mian Eccommerce </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio quaerat dolor minima similique unde. Molestias magni esse voluptate excepturi officia, non blanditiis consectetur id corporis perspiciatis, harum similique nobis.</p>
        <div className=' grid sm:place-items-center '>
            <Link href="/products" ><button className=' btn btn-primary bg-blue-500'>check now</button></Link>
        
        </div>
      </div>
      <div className='  float-right '>
        <img  className='  h-2/4 w-full shadow bg-center bg-cover'  src="1.png" alt="about/image" />
      </div>
    </div>
    </div>
    </div>

    
  
    </>
  )
}

export default About
