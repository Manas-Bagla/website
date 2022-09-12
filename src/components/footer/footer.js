import React from 'react'
import css from "./footer.css"
const footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
    {/* <div className='footer-icons'>
    <i  href="https://www.facebook.com/"  class="fa-brands  fa-facebook-square  fa-2xl"></i>
    <i  href="https://twitter.com/" class="fa-brands fa-twitter-square fa-2xl"></i>
    <i class="fa-brands fa-github-square fa-2xl"></i>
    </div> */}
    <div className='footer-text pb-5 pt-5'>
      <h3 className="font-pop">Terms of Use  Privacy Policy</h3>
      <h4 className='year font-mon '>@ {currentYear} Manas Bagla ❤</h4>
    </div>
    </div>
  )
}

export default footer
