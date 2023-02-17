import React from 'react'
import Footer from '../component/Footer/Footer'

export default function Pagenotfound() {
  return (
   <>
       <div className='h-screen'>
         <div className='text-center'>
         <img src="/404.png" alt="" className=' w-1/3 mx-auto' />
             <a href="/" class="rounded relative d-inline-flex group items-center justify-center px-3.5 py-2 mt-3
                cursor-pointer border-b-4 border-l-2 active:border-[6eccaf] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6eccaf] to-[#86ddc1] border-[#58e3b7] text-white">            
                 <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                 <span class="relative d-flex font-[600]"> Go back Home </span>
               </a>
         </div>
    </div>
    <Footer />
   </>
    
  )
}
