import React from 'react'
import {AiFillHtml5,AiFillGithub,AiFillChrome} from "react-icons/ai"
import {DiCss3 , DiReact} from "react-icons/di"
import {SiJavascript , SiTailwindcss} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {BsFillBootstrapFill} from "react-icons/bs"
import {CgFigma} from "react-icons/cg"

const projects = () => {
  return (
    <div className="bg-[#1B2430]" id="Projects">
    <div className="Heading text-center pt-[111px] font-mon text-4xl text-white">
      <h1>Projects</h1>
      </div>
      <div className="projects">
      
          <div className="xl:flex pt-40 xl:ml-[270px] xl:mr-[233px] justify-between gap-[200px] md:flex-none  ">
              <img src="./project1.png" className="hover:scale-110  duration-300 " />
              
            <div className="">
            <div className="font-mon font-bold text-4xl text-white md:pt-10 "> 
            <h1>
            MovieSpace
            </h1>
            </div>
            <div className="pt-10 text-white font-inter">
              <h1>This was a react application that was made with the use of "omdb API". In this app, we can search for movies and series, etc. there is a filter section that filters series from movies. I learned a lot of things making for example how to use the search input bar in react and how to use components to arrange large amounts of data this was a fun small react project.</h1>
            </div>
            <div className="flex pt-28 gap-12 md:pt-10">
            <AiFillHtml5 size={50} className="hover:text-[#2effee] duration-300"/>
            <DiReact size={50} className="hover:text-[#2effee] duration-300"/>
            <DiCss3 size={50} className="hover:text-[#2effee] duration-300"/>
            <SiTailwindcss size={50} className="hover:text-[#2effee] duration-300"/>

            <SiJavascript className="mt-1 hover:text-[#2effee] duration-300" size={40} />

            </div>  
            
            </div>
            </div>
            <div className="flex xl:ml-[270px] xl:gap-32 gap-10 mt-5 md:pt-10">
            <div className=" flex gap-2">
            <a className="hover:text-teal-500 cursor-pointer text-white" href=" https://moviespace-manas.netlify.app" target="_blank">
            <AiFillChrome size={40} />
            </a>
            <h1 className="mt-1 text-2xl text-white">Live</h1>
        
        </div>
      <div className="  flex gap-2">
      <a className="hover:text-teal-500 cursor-pointer text-white" href="https://github.com/Manas-Bagla/MovieSpace" target="_blank">
         <AiFillGithub size={40}/>
         </a>
        <h1 className="mt-1 text-2xl text-white">Source Code</h1>
        </div>
      </div>
      </div>
      <div className="projects">
      
          <div className="xl:flex pt-40 xl:ml-[270px] xl:mr-[233px] justify-between gap-[200px] md:flex-none">
              <img src="./project2.png" className="hover:scale-110  duration-300 " />
              
            <div className="">
            <div className="font-mon font-bold text-4xl text-white md:pt-10 "> 
            <h1>
            Food-Delivery

            </h1>
            </div>
            <div className="pt-10 text-white font-inter">
              <h1>This is a Front-End project made using Tailwind CSS and React. It was made using a custom small data size and making it a small API. I learned a lot of things making for example how to use the components to arrange large amounts of data and how to filter the data using react. This project is not complete there are a lot of things that could be done to improve and I am constantly trying to improve this Food-Delivery App. </h1>
            </div>
            <div className="flex pt-28 gap-12 md:pt-10 ">
            <AiFillHtml5 size={50}  className="hover:text-[#2effee] duration-300"/>
            {/* <DiCss3 size={50}/> */}
            <SiTailwindcss size={50} className="hover:text-[#2effee] duration-300"/>
            <SiJavascript className="mt-1 hover:text-[#2effee]  duration-300" size={40} />
            <DiReact size={50} className="hover:text-[#2effee]  duration-300"/>

            </div>  
            
            </div>
            </div>
            <div className="flex xl:ml-[270px] xl:gap-32 gap-10 mt-5 md:pt-10">
            <div className=" flex gap-2">
            <a className="hover:text-teal-500 cursor-pointer text-white" href="https://food-delivery-manas.netlify.app" target="_blank">
            <AiFillChrome size={40} />
            </a>
            <h1 className="mt-1 text-2xl text-white">Live</h1>
        
        </div>
      <div className="  flex gap-2">
      <a className="hover:text-teal-500 cursor-pointer text-white" href="https://github.com/Manas-Bagla/food-delivery" target="_blank">
         <AiFillGithub size={40}/>
         </a>
        <h1 className="mt-1 text-2xl text-white">Source Code</h1>
        </div>
      </div>
      </div>
        <div className="projects">
        
            <div className="xl:flex pt-40 xl:ml-[270px] xl:mr-[233px] justify-between gap-[200px] md:flex-none">
                <img src="./project.png" className="hover:scale-110  duration-300 " />
                
              <div className="">
              <div className="font-mon font-bold text-4xl text-white md:pt-10"> 
              <h1>
              CarBoom
              </h1>
              </div>
              <div className="pt-10 text-white font-inter">
                <h1>This is a car game that I made using vanilla and raw Javascript to understand the basics of native Javascript.I really enjoyed the process of making a real game now I understand that making a game is not a joke this project was made primarily for a better understanding of Javascript.</h1>
              </div>
              <div className="flex pt-28 gap-12 md:pt-10">
              <AiFillHtml5 size={50} className="hover:text-[#2effee] duration-300"/>
              <DiCss3 size={50} className="hover:text-[#2effee] duration-300"/>
              <SiJavascript className="mt-1 hover:text-[#2effee] duration-300" size={40}/>

              </div>  
              
              </div>
              </div>
              <div className="flex xl:ml-[270px] xl:gap-32 gap-10 mt-5 md:pt-10">
              <div className=" flex gap-2">
              <a className="hover:text-teal-500 cursor-pointer text-white" href="https://carboom-manas.netlify.app/" target="_blank">
              <AiFillChrome size={40} />
              </a>
              <h1 className="mt-1 text-2xl text-white">Live</h1>
          
          </div>
        <div className="  flex gap-2">
        <a className="hover:text-teal-500 cursor-pointer text-white" href="https://github.com/Manas-Bagla/CarBoom" target="_blank">
          <AiFillGithub size={40}/>
          </a>
          <h1 className="mt-1 text-2xl text-white pb-48">Source Code</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default projects
