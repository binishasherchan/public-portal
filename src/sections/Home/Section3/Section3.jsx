import React from "react";
import logo from './../../../assets/img/logo.png'
import bizbazar from './../../../assets/img/bizbazar.png'
import withoutbg from './../../../assets/img/withoutbg.png'
import queen from './../../../assets/img/queen.jpg'
import { useState } from "react";

function Section3() {
     const [projects] = useState ([
          {
           name: 'Hotel Queen Tower',
           image: '/queen.png',
          },
          {
            name: 'Panchase Cable Car and Tours Limited',
            image: '/panchaselogo.webp',
          },
          {
               name: 'Bandipur Cable Car and Tourism Limited',
               image: '/withoutbg.png',
              },
              {
                name: 'Bizbazar Limited',
                image: '/bizbazar.png',
              },
              {
               name: 'Land Bank',
               image: 'Land.png',
              },
              {
                name: 'Chimkeswori Cable Car',
                image: 'chhimkeshori.png',
              },
              {
               name: 'Share Land Development Project (SLDP)',
               image: 'sldp.png',
              },
              {
                name: 'Real Estate Bazar',
                image: '/realstate.png',
              },
              {
               name: 'Cable Car Engineering Consultancy',
               image: '/cablecarEngineering.png',
             }
           
     ]);
  return     <section id="projects">
               <div class="container mx-auto lg:flex align-items-center lg:h-screen">
                  <div className="">
                    <h5 className="font-quicksand text-[16px] mt-3 font-[700]">Featured Projects</h5>
                    <h2 className="text-[38px]  font-[600] mt-3 mb-4">What we do</h2>
                     <div class="lg:grid lg:grid-cols-3 gap-4 ...">
                       {projects.map((projects, index) =>(
                              <div className="md:flex md:mb-4 sm:mb-4 items-center justify-between project-card rounded backdrop-blur-sm bg-white/30 
                               hover:-translate-y-7 transition duration-700 ease-in-out" key={index}>
                                  <img src= {projects.image} alt=""  className="company-logo"/>
                                  <h2 className="text-[22px]  font-[600] mb-4 ms-3">{projects.name}</h2>
                              </div>
                        ))}  
                     </div>  
                  </div>  
               </div>      
              </section>    
       
}

export default Section3;
