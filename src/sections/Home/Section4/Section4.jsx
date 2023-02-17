import React from "react";
import student from '../../../assets/img/student.jpg'
import { useState } from "react";

function Section4 () {
    const[events] = useState([
       
        {
            name:'RKD Women Club 2nd Anniversary ',
            image:'/eventwomen.jpg',
            info:'The program focused on upgrading and uplifting the lives of women from every sector of the field.',
            date: 'January 20, 2023',
          },
          {
            name:'Panchase Cable Car & Tours 5th AGM',
            image:'/panchase.jpg',
            info:'The program focused to amend provision related to preference shares of company regulations.',
            date: 'January 16, 2023',
          },
          {
            name:'Salami & Ilami Launching Program',
            image:'/salami.png',
            info:'The   program   focused   to   start   initiate   to   encourage, promote the development of agricultural industry.',
            date: 'Oct 15, 2022',
          },
          {
            name:'SLDP Corporate Orientation Program ',
            image:'/sldpevent.jpg',
            info:'The program focused on the risks, strengths and future success of SLDP project. ',
            date: 'September 7, 2022',
          },
          {
            name:'RKD Strategic Business Assembly',
            image:'/assembly.jpg',
            info:'The program focused on theme like CM Boss, Salami, Ilami and upcoming projects of Bandipur Cablecar.',
            date: 'July 23, 2022',
          },     
          {
            name:'RKD Holdings Limited 6th Anniversary ',
            image:'/anniversary.jpg',
            info:'The program focused on projects like Shoppin card, Bandipur Cablecar and upcoming projects of company. ',
            date: 'July 5, 2022',
          }
    ]);
    const[mainevent] = useState([
        {
            name:'rkd anniversary',
            image:'https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            info:'Lorem ipsum dolor sit, amet consectetur adipisicing eli aspernatur assumenda hic. ',
          }
    ]);
   return  <div id="events">
               <div class="container mx-auto pt-5 pb-5 ">
                
                    <div class="lg:grid lg:grid-cols-4 gap-4 p-6">
                       <div class=" text-[#000] text-lg p-6 rounded-lg row-span-2 flex align-items-center">
                            <div>
                            <h5 class="font-quicksand text-[16px] mt-3 font-[700]">Our event details</h5>
                            <h2 class="text-[38px]  font-[600] mt-3 mb-2 leading-9">Important Events</h2>
                            <p>Some of the important events that took place at RKD Holdings Limited are :</p>
                            </div>
                       </div>
                        {events.map((events, index) =>(
                         <div class=" border-[#09aa4e47] text-[#000] text-lg p-3 rounded-lg event-card  hover:scale-110 transition duration-700 ease-in-out" key={index}>
                            <div className="text-center">
                                <img src={ events.image} alt="" class="mx-auto w-100 h-40 rounded object-cover "/>
                                <span class="post-date text-sm mt-4 text-[#382c2c]">
                                   {events.date}
                                </span>
                                <h2 class="text-[24px]  font-[600] mb-2 mt-2">{events.name}</h2>
                                <p>{events.info}
                                </p>
                            </div>
                        </div>
                       ))}
                    </div>
              </div>
</div>;
}
export default Section4;