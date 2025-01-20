




const Contact = () => {
  

  return (
    <div >
    
    
      <h1 className='text-center text-gray-400 pt-28'>Contact Us</h1>
  
      <h1><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274330387!2d74.00471844300726!3d31.483103656420948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704270760104!5m2!1sen!2s" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></h1>

<div className='m-auto  w-3/4 '>
<form action="https://formspree.io/f/mwkgkqpb" method='POST' className='foem border-spacing-4 text-center  bg-gray-100 border border-black sm:w-4/5 md:w-1/2 lg:w-2/5 m-auto mt-4'>

<input type="text"  name='' placeholder='enter your name' className='border border-stone-400  my-3 shadow w-4/5 h-10 text-center ' autoComplete='off' /><br />
<input type="email" autoComplete='off'  name='email' placeholder=' enter your email' className='border  border-stone-400 my-3 shadow w-4/5 h-10 text-center' /><br />
<textarea name="text" id="" autoComplete='off' cols="30" rows="10" placeholder='message' className='border  border-stone-400  my-3 shadow w-4/5  '></textarea><br />
<button className='bg-red-500 rounded-2xl mb-3  text-white border shadow  hover:bg-opacity-80  p-3 ' >Send Message</button>
</form>
      </div>
    </div>
  )
}

export default Contact
