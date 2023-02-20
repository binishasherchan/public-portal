import React from "react";
import logo from './../../../assets/img/logo.png'
import tifl from './../../../assets/img/tifl.png'
import bizbazar from '../../../assets/img/bizbazar.png'
import withoutbg from '../../../assets/img/withoutbg.png'
import panchaselogo from '../../../assets/img/panchaselogo.webp'
import { useState } from "react";
function Section2() {
   const [company]= useState([
{
   image:'/tifl.png',
   title:'Tourism Investment Fund Limited',
   description:"Tourism   Investment   Fund   Ltd.   main   motive   is   to   promote   the   tourism industry in Nepal & to express the importance of entrepreneurship to a mass number of people.",
},
{
   image:'/withoutbg.png',
   title:'Bandipur Cable Car & Tourism Limited',
   description:'Bandipur Cable Car and Tourism Limited is a sovereign investment company managing a diverse portfolio of assets in the tourism sector.',
},
{
   image:'/bizbazar.png',
   title:'Bizbazar Limited',
   description:'Biz Bazar is a public limited subsidiary company of RKD group established with a vision to digitize the Nepalese market. ',
},
{
   image:'/panchaselogo.webp',
   title:'Panchase Cable Car & Tours Limited',
   description:'Panchase Cable Car and Tours is a limited company registered with the Government of Nepal. Its registered office is at Sabhagriha Chowk, Pokhara.',
}

   ]);
   const[filteredcompany] = useState ([
      {
         image:'/logo.png',
         title:'RKD Holdings Limited',
         description:" RKD Group has launched a collective entrepreneurship campaign with aim of investing the same amount in supporting the development of the country that raises the living standards of lower-middle-class people.",
      } 
   ]);
  return <section className=" rounded-lg" id="about">
            <div class="container mx-auto xl:flex pt-5 pb-5">
         <div class="lg:flex align-items-center main-col">
             
                        <div class="lg:grid lg:grid-cols-3 gap-4 " >
                        {filteredcompany.map((filteredcompany, index) =>(
                        <div class=" bg-[#fff] border-2 border-[#09aa4e47] text-[#000]  text-center p-3 rounded-lg row-span-2 h-80 xs:h-60 mt-36 company-card " key={index}>
                                  <img src= {filteredcompany.image} alt=""  className="mx-auto company-logo"/>
                                  <h2 className="text-[26px]  font-[600] mb-3">{filteredcompany.title}</h2>
                                  <p>{filteredcompany.description}</p>
                        </div>
                        ))
              }
                          {company.map((company, index) =>(
                        <div class=" bg-[#fff] border-2 border-[#09aa4e47] text-[#000]-500  text-center p-3 rounded-lg company-card" key={index}>
                                  <img src= {company.image} alt=""  className="mx-auto company-logo"/>
                                  <h2 className="text-[26px]  font-[600] mb-3 mt-3">{company.title}</h2>
                                  <p> {company.description} </p>
                        </div>
                         ))
                        }
                        {/* // <div class=" bg-[#fff] border border-[#09aa4e47] text-[#000]  text-center p-5 rounded-lg ">
                        // <img src= {withoutbg} alt=""  className="mx-auto company-logo"/>
                        //           <h2 className="text-[26px]  font-[600] mb-4">Bandipur Cable Car</h2>
                        //           <p> Lorem ipsum dolor sit, amet consectetur adipisicing eli aspernatur assumenda hic necessitatibus a quaerat officiis </p>
                        // </div>
                        // <div class=" bg-[#fff] border border-[#09aa4e47] text-[#000]-500  text-center p-5 rounded-lg">
                        // <img src= {bizbazar} alt=""  className="mx-auto w-8 h-8"/>
                        //           <h2 className="text-[26px]  font-[600] mb-4">Bizbazar</h2>
                        //           <p> Lorem ipsum dolor sit, amet consectetur adipisicing eli aspernatur assumenda hic necessitatibus a quaerat officiis </p>
                        // </div>
                        // <div class=" bg-[#fff] border border-[#09aa4e47] text-[#000]-500  text-center p-5 rounded-lg">
                        //          <img src= {panchaselogo} alt=""  className="mx-auto company-logo"/>
                        //           <h2 className="text-[26px]  font-[600] mb-4">Panchase Cable Car Ltd</h2>
                        //           <p> Lorem ipsum dolor sit, amet consectetur adipisicing eli aspernatur assumenda hic necessitatibus a quaerat officiis </p>
                        // </div> */}
                        
                    </div>
                    
              
             <div class=" ms-4">
               <h5 className="font-quicksand text-[16px] mt-3 font-[700]">Group Company</h5>
               <h2 className="text-[38px]  font-[600]  mt-3 mb-4 leading-9">Our Subsidiary <br /> Companies</h2>
               <p>
               RKD   Holdings   Limited   has   various   subsidiary   companies   under   different
categories. Our primary businesses today, Bandipur Cable car and Tourism
Limited and Bizbazar, have grown to substantial market capitalizations.
               </p>
             </div>
         </div>
      </div>
      
         </section>;
}

export default Section2;
