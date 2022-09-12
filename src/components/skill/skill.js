import React from 'react'
import {AiFillHtml5,AiFillGithub} from "react-icons/ai"
import {DiCss3 , DiReact} from "react-icons/di"
import {SiJavascript , SiTailwindcss} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {BsFillBootstrapFill} from "react-icons/bs"
import {CgFigma} from "react-icons/cg"

const skill = () => {
  return (
    <div>
    <div className="skill bg-[#D9D9D9] xl:visible ">
    <div className="text-center pt-12 font-mon xl:text-4xl text-black text-xl">
        <h1>Skills</h1>
    </div>
    <div className="flex justify-between xl:pl-[500px] xl:pr-[500px] pt-[50px]">
    <div> <AiFillHtml5 size={50} className="text-black"/>
           <h1 className="text-center font-inter pt-3 text-black">Html</h1></div>
    <div> <DiCss3 size={50} className="text-black"/>
           <h1 className="text-center font-inter pt-3 text-black">Css</h1></div>
    <div> <div className="pl-3"> <SiJavascript size={40} className="text-black"/></div>
           <h1 className="text-center font-inter pt-5 text-black">Javascript</h1></div>
    <div> <FaReact size={40} className="text-black"/>
           <h1 className="text-center font-inter pt-5 text-black">React</h1></div>
    <div> <div className="pl-5"> <SiTailwindcss size={40} className="text-black"/></div>
           <h1 className="text-center font-inter pt-5 text-black">Tailwind Css</h1></div>
    <div> <div className="pl-3"> <BsFillBootstrapFill size={40}  className="text-black"/></div>
           <h1 className="text-center font-inter pt-5 text-black">Bootstrap</h1></div>
    <div> <CgFigma size={40} className="text-black"/>
           <h1 className="text-center font-inter pt-5 text-black">Figma</h1></div>
    <div> <div className="pl-2"> <AiFillGithub size={40}  className="text-black"/> </div>
           <h1 className="text-center font-inter pt-5 pb-12 text-black">Git Hub</h1></div>
          
    </div>
    </div>
      
    </div>
  )
}

export default skill
