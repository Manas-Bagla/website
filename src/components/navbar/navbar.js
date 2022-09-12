import React from 'react'
import{Link} from "react-scroll"

const navbar = () => {
  return (
    <div className="flex justify-between xl:pl-[120px] xl:pr-[120px] xl:pt-[2.5em] pl-[50px] pt-10 ">
      <div>
         <h1 className="text-2xl font-pop">Manas<span className="text-teal-400">.</span></h1>
      </div>
      <div className="md:invisible sm:invisible xl:visible invisible ">
         <ul className="flex gap-[70px] pt-[4px]">
            <li><Link to="Main"   spy={true} smooth={true} offset={50} duration={500}  className="hover:text-teal-500 cursor-pointer font-inter">Home</Link> </li>
            <li><Link  spy={true} smooth={true} offset={50} duration={500} className="hover:text-teal-500 cursor-pointer font-inter" to="About">About</Link></li>
            <li><Link  spy={true} smooth={true} offset={50} duration={500}  className="hover:text-teal-500 cursor-pointer font-inter" to="Projects">Projects</Link></li>
            <li><Link  spy={true} smooth={true} offset={50} duration={500} className="hover:text-teal-500 cursor-pointer font-inter" to="Contact">Contact</Link></li>
         </ul>
      </div>

    </div>
  )
}

export default navbar
