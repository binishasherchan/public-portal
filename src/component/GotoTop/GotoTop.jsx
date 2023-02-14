import { ArrowUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import React , {useState}from "react";


const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  
    return (
          <div  className="scrollTop " onClick={scrollTop} style={{height: 40,  right:30, display: showScroll ? 'flex' : 'none'}}>
              <ArrowUpIcon  className="w-7"/>
          </div>
    );
  }
  
  export default ScrollArrow;