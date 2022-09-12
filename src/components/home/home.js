import React from 'react'
import Navbar from '../navbar/navbar.js'
import  "./home.scss"
import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub , BsDribbble} from "react-icons/bs"
import { Link } from 'react-scroll'

const home = () => {
 
  return (
    <div className="home pb-[325px]">
    <img src="./home.gif"/>
      <Navbar/>
      <div className="social absolute xl:ml-[1621px]  mt-[200px] md:ml-[1000px] sm:pl-10 pl-10">
      {/* <IconContext.Provider value={{size: }}> */}
      <a href="https://www.linkedin.com/in/manas-bagla-b34a611a8/"
      target="_blank" className="cursor-pointer hover:text-teal-500"><FaLinkedinIn size="30px"/></a>
           
            <div className="pt-10">
            <a href="https://github.com/Manas-Bagla" target="_blank" className="cursor-pointer hover:text-teal-500"><BsGithub size="30px"/></a>
            </div>
            <div className="pt-10">
            <a href="https://dribbble.com/manasbagla" target="_blank" className="cursor-pointer hover:text-teal-500"><BsDribbble size="30px"/></a>
            
            </div>
            {/* </IconContext.Provider> */}
            </div>
      <div>
      <div className="xl:text-5xl xl:pl-[270px] xl:pt-[2.6em] font-pop sm:text-3xl text-2xl pl-[140px] pt-10">
          <h1> &lt;Hi, I’m  <br/> </h1>        
  <h1 className="pt-5 pl-1.5"> &nbsp; Manas Bagla./&gt;</h1>
          
      </div>
      <div className="xl:text-2xl xl:pl-[305px] xl:pt-[2em] text-teal-500 font-inter sm:text-xl text-sm pl-[160px] pt-5">
          <h2>Frontend Developer</h2>
          </div>
          <div className=" xl:text-xl xl:xl:pl-[308px] xl:xl:pt-[2em] font-inter text-[#565656] sm:text-sm text-xs pl-[160px] pt-5 ">
            <h2>I make beutiful websites by <br/>
learning and using modern tools.</h2>
          </div>
          <a href="https://github.com/Manas-Bagla" target="_blank">
          <button class="  xl:ml-[305px] xl:mt-[2.6em] bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 border border-teal-700 rounded font-inter ml-[160px] mt-5 xl:text-base text-xs">
              Resume
            </button>
            </a>
            <Link  spy={true} smooth={true} offset={50} duration={500} to="Projects">
          <button class="xl:ml-[1em] xl:mt-[2.6em] bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 border border-teal-700 rounded font-inter ml-2 xl:text-base text-xs">
              Projects
            </button>
            </Link>
            <div class="container pl-[270px] pt-[2.6em]">
            
            
 </div>

{/* 
 <div className="container pt-[14em]">
  <div className="chevron"></div>
  <div className="chevron"></div>
  <div className="chevron"></div>
</div> */}
</div>
          </div>
    
  )
}

export default home
