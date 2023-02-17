import React from "react";

function Footer() {
  return <div className="bg-[#ffe77ca8]">

<footer class="p-4  rounded-lg md:flex md:items-center md:justify-between md:p-6 bg-[#f1d28a] mx-auto">
   <div className="container  md:flex md:items-center md:justify-between">
   <span class="text-sm text-[#000] sm:text-center dark:text-[#000]">© 2023 <a href="https://flowbite.com"
     class="hover:underline" target="_blank">PSMS</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li> <a href="#about" class="mr-4 text-sm text-[#000] hover:underline md:mr-6 dark:text-[#000] font-[600]">About</a></li>
        <li> <a href="#projects" class="mr-4 text-sm text-[#000] hover:underline md:mr-6 dark:text-[#000] font-[600]">Projects </a></li>
        <li> <a href="#investment-portfolio" class="mr-4 text-sm text-[#000] hover:underline md:mr-6 dark:text-[#000] font-[600]">Investments</a></li>
        <li> <a href="#contact" class="text-sm text-[#000] hover:underline dark:text-[#000] font-[600]">Contact</a></li>
    </ul>
   </div>
</footer>

         </div>;
}

export default Footer;
