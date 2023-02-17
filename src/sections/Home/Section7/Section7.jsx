
import { useState } from "react";
import cx from 'classnames';
import Investment from "./Components/Investment";
import Equity from "./Components/Equity";
import Promoters from "./Components/Promoters";
import Corporate from "./Components/Corporate";
import Private from "./Components/Private";




  


const tab=["INVESTMENT STRUCTURE","EQUITY STRUCTURE","PROMOTERS STRUCTURE","CORPORATE STRUCTURE", "PRIVATES GROUP INVESTMENT PLAN"]

function Section7() {
 const [active,setActive]=useState("INVESTMENT STRUCTURE")

 const getActiveTab=()=>{
   switch (active) {
    case "INVESTMENT STRUCTURE":return  <Investment/>
      
    case "EQUITY STRUCTURE":return <Equity/>
    case "PROMOTERS STRUCTURE":return <Promoters/>
    case "CORPORATE STRUCTURE":return <Corporate />
    case "PRIVATES GROUP INVESTMENT PLAN":return <Private />
    default:return <>INVESTMENT STRUCTURE</>
      
   }

 }

 console.log(active);
  
    return <section className="" id="investment-portfolio">
              <div className="container lg:flex align-items-center justify-center h-screen  pt-5 pb-5">
                   <div>
                   <h2 className="text-[38px]  font-[600]  mt-5 mb-4 leading-9 text-center">Investment Portfolio</h2>
                <div className="md:flex justify-center">
                  {tab.map((dat,i)=>(<div key={i} className={cx(active===dat?"active-tab":"tab-heading","")} onClick={()=>setActive(dat)}>{dat}
                </div>))}
                </div>
                <div className="mt-4"style={
                  {height:"400px",width:"100%",}
                }>{getActiveTab()}</div>
                   </div>
              </div>


           </section>;
}
export default Section7;