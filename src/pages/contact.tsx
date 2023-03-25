import React from 'react'
import Background from '../assets/images/car.jpg'

function contact() {
  return (
    <div 
    style={{backgroundImage:`url(${Background})`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
       <div className="flex place-items-center h-screen flex-col">
       <h3 className='p-4 flex flex-row bg-slate-300 bg-opacity-50 text text-orange-400 rounded mb-5 mt-10'>Email: support@support.com 
       </h3>
       <h3 className='p-4 flex flex-row bg-slate-300 bg-opacity-50 text text-orange-400 rounded mb-80 mt-5'>Phone Number: 123-123-1234
       </h3>
       
       
        </div>
      
    </div>
  )
}

export default contact

