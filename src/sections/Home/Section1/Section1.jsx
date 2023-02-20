import React from "react";
import dd from './../../../assets/img/dd.png'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import capital from '../../../assets/img/capital.jpg'
function Section1() {
  return  <div class="hero-block">
    <div class="container mx-auto h-screen">
        <div class="md:flex hero-wrap">
            <div class="hero-text-wrap ">
                <div class="hero-text-block">
               <h2 className="text-[38px]  font-[700]  mt-3 mb-2 leading-10 "> Promoter Share Management System </h2>
               <p className="font-[500]  mt-3 mb-2"> Promoter Share Management System is an application to keep track of the ownership of the shares of the company. This system helps to keep the privacy of a shareholder within the system.</p>
               {/* <button class="bg-red-100 hover:bg-white-700 text-[#000] font-[600] py-2 px-4 mt-4 rounded flex items-center">
                 Our Company <ChevronRightIcon className="w-7"  />
               </button> */}
               <a href="#about" class="rounded relative d-inline-flex group items-center justify-center px-3.5 py-2 mt-3
                cursor-pointer border-b-4 border-l-2 active:border-[6eccaf] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6eccaf] to-[#86ddc1] border-[#58e3b7] text-white">            
                 <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                 <span class="relative d-flex font-[600]"> Our Company <ChevronRightIcon className="w-6"  /></span>
               </a>
                </div>
            </div>
            <div class=" hero-image-wrap md:mt-5">
                {/* <div class="shapes-bg-block">
                    <div class="circle-big"></div>
                    <div class="circle-small"></div>
                </div> */}
                <div class="hero-image-block">
                <img src={capital} alt="psms" className="rounded  md:mt-5" />
                <div class="shapes-bg-block">
                    <div class="circle-big p-9 motion-safe:animate-pulse ">
                        {/* <h3 className="text-[25px] font-[600] text-[#fff]">3 years excellence</h3> */}
                        <div className="flex align-items-center">
                          <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-sm w-14 h-14 rounded flex align-items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6eccaf" className=" h-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                             </svg>
                          </div>
                          <div className="pl-3">
                          <h5 className="text-[35px] font-[600] text-[#000] "> +5k</h5>
                           <span className="text-[18px] font-[600] text-[#fff]">Shareholders</span>
                          </div>
                        </div>
                       <div className="flex align-items-center">
                        <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-sm w-12 h-12 rounded flex align-items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#6eccaf" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        </div>

                       <div className="pl-3">
                        <h5 className="text-[35px] font-[600] text-[#000] ">5 </h5>
                        <span className="text-[18px] font-[600] text-[#fff]">Company</span>
                       </div>
                       </div>
                    </div>
                    {/* <div class="circle-small"></div> */}
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
    
}

export default Section1;
