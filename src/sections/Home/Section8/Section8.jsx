import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { PhoneIcon} from "@heroicons/react/20/solid";
import {HomeIcon} from "@heroicons/react/20/solid";

import cx from 'classnames'


const tab=["RKD Holdings","TIFL","Bandipur Cablecar","Biz Bazar"]

function Section8() {
 const [active,setActive]=useState("RKD Holdings")

 const getActiveTab=()=>{
   switch (active) {
    case "RKD Holdings":return <>
       <div class="lg:flex  items-center">                  
                         <div class="md:w-1/2">
                            {/* <h2 class="text-[38px]  font-[600] mt-3 mb-2 leading-9">Important Events</h2> */}
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14063.339358125495!2d83.9835839!3d28.2123301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595ad91b26edd%3A0xd2c64a0bf6c5b255!2sRKD%20Holdings%20Limited!5e0!3m2!1sen!2snp!4v1675145027245!5m2!1sen!2snp" 
                            width="100%" height="320"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                         <div class="md:w-1/2 h-80 d-flex align-items-center   bg-gradient-to-b from-[#ffff] to-[#6ECCAF42] p-4 contact-details">
                             <div>
                             <div className="flex align-items-center mb-2">
                               <EnvelopeIcon className="w-5 mr-3" />   <a href="mailto:info@rkdholdings.com.np"> <h4 class="font-quicksand text-[16px] font-[700]">info@rkdholdings.com.np</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <PhoneIcon className="w-5 mr-3" /> <a href="tel:061-544440"> <h4 class="font-quicksand text-[16px] font-[700]">061-544440</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <HomeIcon className="w-5 mr-3"/>  <h4 class="font-quicksand text-[16px] font-[700]">Sabhagriha Chowk, Pokhara</h4>
                             </div>
                             </div>
                         </div>
        </div>
      </>
      
    case "TIFL":return <>
              <div class="md:md:flex h-full items-center">                  
                         <div class="md:w-1/2">
                            {/* <h2 class="text-[38px]  font-[600] mt-3 mb-2 leading-9">Important Events</h2> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.835563439932!2d83.98146961542298!3d28.212308109725285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595cd31f49d3f%3A0x21c88f7b4197425a!2sTourism%20Investment%20Fund%20Limited!5e0!3m2!1sen!2snp!4v1675145521586!5m2!1sen!2snp" 
                            width="100%" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                         <div class="md:w-1/2 h-80 d-flex align-items-center  bg-gradient-to-b from-[#ffff] to-[#6ECCAF42] p-4 contact-details">
                             <div>
                             <div className="flex align-items-center mb-2">
                               <EnvelopeIcon className="w-5 mr-3" />   <a href="mailto:info@tifl.com.np"> <h4 class="font-quicksand text-[16px] font-[700]">info@tifl.com.np</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <PhoneIcon className="w-5 mr-3" /> <a href="tel:+977 9802855608"> <h4 class="font-quicksand text-[16px] font-[700]">+977 9802855608</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <HomeIcon className="w-5 mr-3"/>  <h4 class="font-quicksand text-[16px] font-[700]">Sabhagriha Chowk, Pokhara</h4>
                             </div>
                             </div>
                         </div>
        </div>
         </>
    case "Bandipur Cablecar":return <>
         <div>
         <div class="lg:flex items-center">   
      <h2 class="text-[27px]  font-[600] mt-3 mb-2 leading-9">Bandipur Cablecar Corporate Office</h2>               
                         <div class="md:w-1/2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.835616111101!2d83.98147371542294!3d28.21230100%9725245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995954eb23ff771%3A0x18dba0b1c6d00f1c!2sBandipur%20Cable%20Car%20and%20Tourism%20Limited%20Corporate%20Office!5e0!3m2!1sen!2snp!4v1675145692792!5m2!1sen!2snp"
                             width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                         <div class="md:w-1/2 h-80 d-flex align-items-center   bg-gradient-to-b from-[#ffff] to-[#6ECCAF42] p-4 contact-details">
                             <div>
                             <div className="flex align-items-center mb-2">
                               <EnvelopeIcon className="w-5 mr-3" />   <a href="mailto:info@bandipurcablecar.com.np"> <h4 class="font-quicksand text-[16px] font-[700]">info@bandipurcablecar.com.np</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <PhoneIcon className="w-5 mr-3" /> <a href="tel:061-541430"> <h4 class="font-quicksand text-[16px] font-[700]">061-541430</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <HomeIcon className="w-5 mr-3"/>  <h4 class="font-quicksand text-[16px] font-[700]">Sabhagriha Chowk, Pokhara</h4>
                             </div>
                             </div>
                         </div>
        </div>
        <div class="lg:flex items-center mt-4 ">
        <h2 class="text-[27px]  font-[600] mt-3 mb-2 leading-9">Bandipur Cablecar Head office</h2>
                     <div class="md:w-1/2 h-80 bg-gradient-to-b from-[#ffff] to-[#6ECCAF42] p-4 contact-details">
                     <div>
                             <div className="flex align-items-center mb-2">
                               <EnvelopeIcon className="w-5 mr-3" />   <a href="mailto:info@bandipurcablecar.com.np"> <h4 class="font-quicksand text-[16px] font-[700]">info@bandipurcablecar.com.np</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <PhoneIcon className="w-5 mr-3" /> <a href="tel:061-541430"> <h4 class="font-quicksand text-[16px] font-[700]">065-580457</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <HomeIcon className="w-5 mr-3"/>  <h4 class="font-quicksand text-[16px] font-[700]">Thuldhunga, Bandipur Tanahun</h4>
                             </div>
                             </div>
                         </div>
                         <div class="md:w-1/2  d-flex align-items-center">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.8903317278048!2d84.41277399605956!3d27.95409671330911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995055648424e65%3A0x4bf55ab8a5ee040b!2sBandipur%20Cablecar%20Buttom%20Station!5e0!3m2!1sen!2snp!4v1676357910890!5m2!1sen!2snp" 
                           width="600" height="300" 
                          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
        </div>
         </div>
        </>
    case "Biz Bazar":return <>
         <div class="md:md:flex h-full items-center">                  
                         <div class="md:w-1/2">
                            {/* <h2 class="text-[38px]  font-[600] mt-3 mb-2 leading-9">Important Events</h2> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.900864429782!2d85.29766761541525!3d27.689458732884034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f50cc6a4d7%3A0xe9e0e94e9bfc114c!2sBizbazar%20Limited!5e0!3m2!1sen!2snp!4v1675145899944!5m2!1sen!2snp" 
                            width="100%" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                         <div class="md:w-1/2 h-80 d-flex align-items-center  bg-gradient-to-b from-[#ffff] to-[#6ECCAF42] p-4 contact-details">
                              <div>
                              <div className="flex align-items-center mb-2">
                               <EnvelopeIcon className="w-5 mr-3" />   <a href="mailto:info@bizbazar.com.np"> <h4 class="font-quicksand text-[16px] font-[700]">info@bizbazar.com.np</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <PhoneIcon className="w-5 mr-3" /> <a href="tel:+977-9802345050"> <h4 class="font-quicksand text-[16px] font-[700]">+977-9802345050</h4></a>
                             </div>
                             <div  className="flex align-items-center mb-2">
                               <HomeIcon className="w-5 mr-3"/>  <h4 class="font-quicksand text-[16px] font-[700]">Kathmandu, University Path, Kuleshwor</h4>
                             </div>
                              </div>
                         </div>
        </div>
     </>
   
    default:return <>RKD Holdings</>
      
   }

 }
  
    return <div className="bg-gradient-to-t from-[#ffff] to-[#6ECCAF42] " id="contact">
              <div className="container lg:h-screen  pt-5 pb-5">
                <div>
                <h2 className="text-[38px]  font-[600]  mt-5 mb-4 leading-9">Contact Us</h2>
                <div className="md:flex">
                  {tab.map((dat,i)=>(<div key={i} className={cx(active===dat?"active-tab":"tab-heading","")} onClick={()=>setActive(dat)}>{dat}
                </div>))}
                </div>
                </div>
                <div className="mt-4">{getActiveTab()}</div>
              </div>


           </div>;
}
export default Section8;