import React from "react";
import Footer from "../component/Footer/Footer";
import Section1 from "../sections/Home/Section1/Section1";
import Section2 from "../sections/Home/Section2/Section2";
import Section3 from "../sections/Home/Section3/Section3";
import Section4 from "../sections/Home/Section4/Section4";
import Section5 from "../sections/Home/Section5/Section5";
import Section6 from "../sections/Home/Section6/Section6";
import Section7 from "../sections/Home/Section7/Section7";
import Section8 from "../sections/Home/Section8/Section8";
import Coops from "../sections/Home/Sectioncoops/Coops";


function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Coops />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer/>
    </>
  );
}

export default Home;
