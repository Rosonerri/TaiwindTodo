import React from 'react'
import {MdExpandLess} from "react-icons/md"
import img from "./assets/Judiciary.jpg"
const Card = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center mr-[30px]'>
      <div className='border w-[600px] h-80 bg-white-600 rounded-md flex '>
        <img src={img} className='w-[40%] h-80 bg-white object-cover rounded-l-md'/>
      <div>
        <div className='p-4 flex-1'>
        <div className='flex justify-between items-center mb-3 w-[330px]'>
          <h1 className='font-[700]'>Classic Utility Jacket</h1>
          <strong className='text-gray-400'>$113</strong>
        </div>
        <p className='font-[700] text-green-800'>In stock</p>
        <div className='flex items-center justify-between mt-[30px] mb-[20px] w-60'>
          <div className='border p-3 bg-black rounded-md text-white cursor-pointer'>XS</div>
          <div className='p-3 hover:bg-black rounded-md text-grey cursor-pointer hover:text-white transition-all duration-300'>M</div>
          <div className='p-3 hover:bg-black rounded-md text-grey cursor-pointer hover:text-white transition-all duration-300'>LG</div>
          <div className='p-3 hover:bg-black rounded-md text-grey cursor-pointer hover:text-white transition-all duration-300'>XL</div>
        </div>
        <hr />
        <div>
          <button className='border p-3 bg-black rounded-md text-white cursor-pointer font-[600]'>Buy Now</button>
          <button className=' border p-3 bg-white rounded-md text-grey cursor-pointer ml-[30px] mt-[30px] font-[600] hover:scale-[1.02] transition-all duration' >Add to bag</button>
        </div>
        <div className='text-[13px] mt-[15px] font-[600]'>Free Shipping on all continentials</div>
        </div>
      </div>
      </div>
    </div>
  )
}
const App = () => {
 return(
  <div>
    <div className='w-full h-[100vh] flex justify-center items-center'>
    <div className='flex border p-4 w-[80%] h-[70%]  overflow-x-scroll overflow-y-hidden'>
    <Card/>
    {/* <Card/>
    <Card/> */}
    </div>
    </div>
  </div>
 )
}

export default App
