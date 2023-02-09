import React from "react";
import { useState } from "react";

function Section5 () {
  const[roadmap] = useState([
    {
      date:'',
      detail:'',
    },
    {
      date:'',
      detail:'',
    },
    {
      date:'',
      detail:'',
    },
    {
      date:'',
      detail:'',
    },
    {
      date:'',
      detail:'',
    },
  ])
    return <section className=" bg-gradient-to-t from-[#ffff] to-[#6ECCAF42]" id="roadmap">
<div class="container mx-auto pt-5 pb-5">
<h5 className="font-quicksand text-[16px] mt-3 font-[700]">Roadmap</h5>
                 <h2 className="text-[38px]  font-[600]  mt-3">Our Story</h2>
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 "
          >
            
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" border-2 border-[#fff] backdrop-blur-md bg-white/30 col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-sm w-100 hover:-translate-y-7 transition duration-700 ease-in-out"
              >
                <h3 class="font-semibold text-lg mb-1  text-[#000]">January 2013</h3>
                <p class="leading-tight text-justify  text-[#000]">
                Bandipur Cable Car Registered with Government of Nepal
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#6eccaf] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#09aa4e47] shadow" 
                ></div>
              </div>
            </div>
           
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#6eccaf] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#09aa4e47] shadow"
                ></div>
              </div>
              <div
                class=" border-2 border-[#fff] backdrop-blur-md bg-white/30 col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-sm w-100 hover:-translate-y-7 transition duration-700 ease-in-out"
              >
                <h3 class="font-semibold text-lg mb-1  text-[#000]">July 2016</h3>
                <p class="leading-tight  text-[#000] text-justify">
                Establishment of RKD Holdings
                </p>
              </div>
            </div>
          
            <div class="flex flex-row-reverse md:contents">
              <div
                class="border-2 border-[#fff] backdrop-blur-md bg-white/30 col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-sm w-100 hover:-translate-y-7 transition duration-700 ease-in-out"
              >
                <h3 class="font-semibold text-lg mb-1  text-[#000]">July 2018</h3>
                <p class="leading-tight  text-[#000] text-justify">
                Panchase Cable Car Registered with Government of Nepal
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#6eccaf] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#09aa4e47] shadow"
                ></div>
              </div>
            </div>
          
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#6eccaf] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#09aa4e47] shadow"
                ></div>
              </div>
              <div
                class="border-2 border-[#fff] backdrop-blur-md bg-white/30 col-start-6 col-end-10 p-4 rounded-lg my-4 mr-auto shadow-sm w-100 hover:-translate-y-7 transition duration-700 ease-in-out" >
                  <h3 class="font-semibold text-lg mb-1  text-[#000]">January 2021</h3>
                  <p class="leading-tight  text-[#000] text-justify">
                    Biz Bazar Registered with the Government of Nepal
                  </p>              
              </div>
            </div>
          
            <div class="flex flex-row-reverse md:contents">
              {/* <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#09aa4e47] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#09aa4e47] shadow"
                ></div>
              </div> */}
              <div
                class="border-2 border-[#fff] backdrop-blur-md bg-white/30 col-start-1 col-end-5 p-4 rounded-lg my-4 ml-auto shadow-sm w-100 hover:-translate-y-7 transition duration-700 ease-in-out"
              >
                  <h3 class="font-semibold text-lg mb-1  text-[#000]">August 2021</h3>
                  <p class="leading-tight  text-[#000] text-justify">
                    Tourism Investment Fund Limited (TIFL) Registered with the Government of Nepal
                  </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#6eccaf] pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#6eccaf] shadow"
                ></div>
              </div>
            </div>
          </div>
        </div>
           </section>;
}
export default Section5;