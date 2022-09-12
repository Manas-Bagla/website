import React from 'react'
import emailjs from "emailjs-com"
const contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_gux814h', 'template_mxzwcei', e.target, 'tFhIG7cBN7qk9Tan3')
      .then((result) => {
        alert("Success! Got Your Email")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }



  return (
    <div className="text-center" id="Contact"> 
      <div className="pb-20" >
        <h1 className="text-5xl pt-20 font-mon">Contact Me</h1>

        <div>
            <form onSubmit={sendEmail}>
              <div className="row pt-10 xl:pl-[270px] xl:pr-[270px]">
              <div className="col-8 form-group text-xl border border-black">
             <input type="text" className="form-control w-full p-2" placeholder="Name" name="name"/>
              </div>
              <div className="col-8 pt-10 form-group text-xl">
             <input type="email" className="form-control w-full p-2 border border-black" placeholder="Email Address" name="email"/>
              </div>
              <div className="col-8 pt-10 form-group text-xl">
             <input type="text" className="form-control w-full p-2 border border-black " placeholder="Subject" name="subject"/>
              </div>
              <div className="col-8 pt-10 form-group text-xl ">
             <textarea className="form-control w-full p-2 border border-black"  placeholder="Your Message" cols="40" rows="5" name="message"/>
              </div>
              
              </div>
              <div className="col-8  ">
              <button type="submit" class="ml-[1em] mt-[2.6em] bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 border border-teal-700 rounded font-inter text-xl">
              Submit
            </button>
              <button type="reset" class="ml-[1em] mt-[2.6em] bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 border border-teal-700 rounded font-inter text-xl">
              Reset
            </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default contact
