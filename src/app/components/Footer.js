"use client"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative  flex justify-center items-center bg-gray-100 w-full mx-8 xl:mx-auto max-w-[1640px] pt-20">
      {/* Call-to-action Section */}
      <div className='flex flex-col lg:absolute lg:z-[2] lg:top-[0px] lg:flex-row w-full max-w-[940px] items-center justify-between border rounded-2xl bg-white p-6 mx-auto py-10 shadow-lg' >
        <div className='text-gray-700 text-center lg:text-left'>
          <p className='text-xl font-bold'>Ready to get started?</p>
          <p className='text-sm'>Talk to us today and make a difference.</p>
        </div>
        <div className='mt-4 lg:mt-0'>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all'>Get Started</button>
        </div>
      </div>
      
      {/* Footer Main Section */}
      <div className='bg-blue-950 pt-32 text-white pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto text-center' style={{ width: "90%" }}>
          {/* Company Info */}
          <div>
            <h1 className='text-3xl font-extrabold'>AthleticEdge</h1>
            <p className='text-sm mt-3 leading-relaxed opacity-80'>The sportswear market is growing rapidly due to increasing health consciousness. AthleticEdge aims to bridge the gap in user-friendly online shopping by providing an intuitive platform using modern web and mobile technologies.</p>
          </div>
          
          {/* Pages */}
          <div className='text-center'>
            <p className='text-lg font-semibold'>Pages</p>
            <div className='mt-3 space-y-2'>
              <Link href='/' className='block text-white hover:text-orange-400 transition-all'>Home</Link>
              <Link href='/about' className='block text-white hover:text-orange-400 transition-all'>About</Link>
              <Link href='/products' className='block text-white hover:text-orange-400 transition-all'>Products</Link>
              <Link href='/cart' className='block text-white hover:text-orange-400 transition-all'>Cart</Link>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div>
            <p className='text-lg font-semibold'>Follow Us</p>
            <div className='flex justify-center space-x-4 mt-3'>
              <a href="https://www.facebook.com/abubakar.nawaz.786" className='flex items-center text-orange-500   justify-center w-10 h-10 bg-white  hover:bg-orange-500 rounded-full transition-all'>
                <FacebookRoundedIcon className='' />
              </a>
              <a href="https://twitter.com" className='flex items-center text-orange-500   justify-center w-10 h-10 bg-white  hover:bg-orange-500 rounded-full transition-all'>
                <TwitterIcon className='' />
              </a>
              <a href="https://www.instagram.com/mian_abubakar07/?hl=en" className='flex items-center text-orange-500   justify-center w-10 h-10 bg-white  hover:bg-orange-500 rounded-full transition-all'>
                <InstagramIcon className='' />
              </a>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <p className='text-lg font-semibold'>Subscribe for Updates</p>
            <input type="email" className='h-10 w-full mt-2 p-3 rounded bg-gray-200 text-black focus:outline-none' placeholder='Your email address' />
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 mt-3 w-full rounded-lg shadow-md transition-all'>Subscribe</button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <hr className='my-8 border-gray-700' />
        <div className='flex flex-col lg:flex-row justify-between items-center mx-auto text-sm' style={{ width: "90%" }}>
          <div className='text-center lg:text-left opacity-80'>
            &copy; {new Date().getFullYear()} AthleticEdge. All rights reserved.
          </div>
          <div className='flex space-x-4 mt-4 lg:mt-0'>
            <Link href='/faqs' className='text-white hover:text-orange-400 transition-all'>FAQs</Link>
            <Link href='/terms-and-conditions' className='text-white hover:text-orange-400 transition-all'>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
