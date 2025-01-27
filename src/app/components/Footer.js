"use client"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <div className='flex m-auto border lg:relative lg:top-20 rounded-2xl  bg-white justify-between' style={{ width: "90%" }}>
        <div className='text-black-400 ml-10 '>

          <p className='pt-2'>Ready to get started? </p>
          <p>Talk to us Today</p>
        </div>
        <div className='mt-50% mr-10'>
          <button className='btn btn-primary mt-4'>Get started</button>
        </div>
      </div>
      <div className='bg-blue-950 text-white sm:text-center'>
        <div className='mt-10 grid lg:grid-cols-4 gap-3 bg-blue-950 m-auto  text-white' style={{ width: "90%" }}>
          <div className='   lg:pt-24'>
            <h1 className='text-2xl'>AthleticEdge</h1>
            <p className='' style={{ fontSize: '15px' }}>The sportswear market is growing rapidly due to increasing health consciousness and a surge in fitness activities. AthleticEdge aims to bridge the gap in user-friendly online shopping by providing an intuitive, efficient platform using modern web and mobile technologies.</p>
          </div>
          <div className='   lg:pt-24'>
            <p>Subcribe to get importance updates</p>
            <input type="text" className='h-10' placeholder='Your e-mail' />
            <br />
            <button className='btn btn-primary mt-3'>Subcribe</button>
          </div>
          <div className='   lg:pt-24'>
            <p>follow Us</p>
            <div className='flex -tracking-widest sm:text-center sm:m-auto '>
              <h1 className='text-center' style={{ width: "35px", height: '35px', border: 'solid 2px white', borderRadius: '35px' }}>
                <a href="https://www.facebook.com/abubakar.nawaz.786"><FacebookRoundedIcon className=' mb-4 text-white'></FacebookRoundedIcon></a></h1>
              <h1 className=' sm:m-auto sm:text-center' style={{ width: "35px", height: '35px', border: 'solid 2px white', borderRadius: '35px' }}>
                <TwitterIcon className='mb-4 ml-1'></TwitterIcon>
              </h1>
              <h1 className='text-center' style={{ width: "35px", height: '35px', border: 'solid 2px white', borderRadius: '35px' }}>
                <a href="https://www.instagram.com/mian_abubakar07/?hl=en"> <InstagramIcon className='mb-4 text-white'></InstagramIcon></a></h1>
            </div>
          </div>
          <div className='   lg:pt-24'>
            <a href="+92 3431427193" className=' no-underline text-white'>Call Us</a>
            <br />
            +92 3431427193
          </div>
        </div>
        <h1><hr /></h1>
        <div className='flex m-auto justify-between pb-8' style={{ width: "90%" }}>
          <div className='w-1/2'>
            @{new Date().getFullYear()}AthleticEdge All right Reserveed
          </div>
          <div className='w-1/2'>
          <Link href='faqs'> Faqs </Link>

            <br />
           <Link href='terms-and-conditions'> TERMS & CONDITIONs </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
