"use client"
import { Add_to_cart_conetxt_data } from '../Contexts/add_to_cart_context';


const Cart = () => {

  const {cart,deleteItem,clearcart,totalAmount,shippingfee,decrement,increment, isLoading}=Add_to_cart_conetxt_data();
  console.log(cart,"cart")


  if(isLoading){
    return <div className=' w-screen h-screen grid place-items-center'><h1 className='text-gray-500'>Cannot add items plss add this items </h1>
    <a className="hover:text-blue-700 no-underline text-black" href="/products">
              <button className='btn btn-primary'>Add Now </button>
            </a>
    </div>
  }


  return (

    <div className='m-auto lg:w-4/5 mt-5 pt-36' >
    <div className=''style={{border:"solid 1px black"}}>
    <div className=' justify-between bg-slate-50 font-bold  text-gray-500 grid grid-cols-5 text-center'>
       <div><p>Item</p></div>
       <div><p>Price</p></div>
       <div><p>Quantity</p></div>
       <div><p>Subtotal</p></div>
       <div><p>Remove</p></div>
       
    </div>
<div className='  snap-x text-center overflow-scroll max-h-96 w-auto  lg:font-bold'>
    {cart?.map((currentitem, index) => (
        <div className=' grid-cols-5 mt-5 mx-2 bg-gray-50 grid place-items-center' key={index}>
          <div className='grid lg:grid-cols-2'>
          <div>
          
            <img src={currentitem.image} alt={currentitem.name} />
            </div>
            <div className='text-center'>
              <p>{currentitem.name}</p>
              <p className='flex'>Color: <h1 className=' rounded-full w-5 h-5  mx-1' style={{backgroundColor:currentitem.color}}></h1></p>
            </div>
          </div>
          <div>{currentitem.price}</div>
          <div className=' space-x-1'><button onClick={()=>decrement(currentitem.id)} className=' cursor-pointer'> - </button ><span> </span>{currentitem.amount}  <button onClick={()=>increment(currentitem.id)}> + </button> </div>
          <div>{currentitem.price * currentitem.amount}</div>
          <div>
          
           <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#cartmodel" onClick={()=>deleteItem(currentitem.id)}>
  Remove
</button>
           
          </div>
        </div>
      ))}
      </div>
</div>

<div className=' lg:flex mt-2 justify-between'> 
<div>
<a href='/products'>
 <button type="button" className='bg-blue-600 text-black p-2 rounded-xl hover:bg-white hover:text-red-500 border font-bold' >Continue Shopping</button>
 
 
 </a>
 </div>
 <div>
  <button onClick={clearcart} type="button" className='bg-red-600 float-right text-black p-2 rounded-xl hover:bg-white hover:text-red-500 border font-bold' >Clear cart</button>
  <div className='mt-5  font-bold text-gray-500 p-2  bg-gray-100'>
    <p>TotalSub Amount: {totalAmount} </p>
    <p>Shopping feee: ${shippingfee}</p>
    <p>All total Amount : {totalAmount+ shippingfee}</p>
  </div>
  </div>
  
     </div>

     
     
     </div>

  )
}

export default Cart
