"use client"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';
import FeatureProducts from './components/Feature_products';


const Home = () => {

  return (
    <>
      <div className='m-auto w-4/5  pt-24 '  >
        <div className='grid lg:grid-cols-2  h-96      gap-3  my-8'>
          <div className='  '>
            <p className='font-bold'>Welcome to </p>
            <h1>AthleticEdge  Store </h1>
            <p className='mt-5'>The sportswear market is growing rapidly, driven by increasing health consciousness and a surge
              in sports and fitness activities. However, many existing online platforms fail to provide a userfriendly and comprehensive shopping experience. Our project, AthleticEdge, seeks to address
              this gap by developing an intuitive and efficient mobile and web-based storefront tailored for
              sportswear. This platform will leverage modern web technologies and mobile frameworks to
              ensure accessibility, performance, and scalability.</p>
            <div className=' grid sm:place-items-center '>
              <Link href="/products" ><button className=' btn btn-primary bg-blue-500'>check now</button></Link>

            </div>
          </div>
          <div className='  float-right h-1/2'>
            <img className='  h-[400px]  w-full shadow ' src="f1.jpg" alt=""  />
          </div>
        </div>
      </div>


      <FeatureProducts />
      <div className='grid lg:grid-cols-3  m-auto  gap-6  w-4/5     py-10  '  >
        <div className='shadow grid bg-gray-100 place-items-center'>
          <DeliveryDiningIcon className='bg-white w-14 h-14 rounded-full'></DeliveryDiningIcon>
          <p className='font-bold '>Super fast and free delivery</p>
        </div>
        <div className='grid grid-rows-2 gap-4  '>

          <div className=' font-bold box2 shadow grid bg-gray-100 place-items-center'>
            <AdminPanelSettingsIcon className='bg-white rounded-full' /> <p>Non contact Shopping</p>
          </div>
          <div className='shadow grid place-items-center bg-gray-100'>
            <FavoriteBorderOutlinedIcon className='bg-white rounded-full'  ></FavoriteBorderOutlinedIcon> <p className='font-bold'> Monry-back guarante</p>
          </div>
        </div>
        <div className='shadow grid place-items-center bg-gray-100'>
          <PaidOutlinedIcon className='bg-white rounded-full' /> <p className='font-bold'> super secure payment system</p>
        </div>
      </div>

      <h1 className=' mt-48'></h1>

      <div className='bg-gray-100 mb-8'>
        <p className='text-center pt-8'>Trusted by 3000+ companies</p>
        <div className='w-4/5 m-auto grid grid-cols-4 pb-8 pt-8'>
          <div className='grid place-items-center'>
            <img src="amazon.png" alt="amazon" className=' w-14 h-14 rounded-full' />
          </div>
          <div className='grid place-items-center'>
            <img src="com.png" alt="amazon" className=' w-14 h-14 rounded-full' />
          </div>
          <div className='grid place-items-center'>
            <img src="adidas.png" alt="amazon" className=' w-14 h-14 rounded-full' />
          </div>
          <div className='grid place-items-center'>
            <img src="apple.png" alt="amazon" className=' w-14 h-14 rounded-full' />
          </div>

        </div>
      </div>


    </>
  )
}

export default Home
