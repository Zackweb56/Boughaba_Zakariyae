import React from 'react'
import './SocialIcons.css'
// react icons
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>
        <a href='https://facebook.com' className="facebook">
          <span><FaFacebook /></span>
        </a>
        <a href='https://wa.me/qr/OK6FDXMFVZOEE1' className="whatsapp">
          <span><FaWhatsapp /></span>    
        </a>
        <a href='https://github.com/Zackweb56' className="github">
          <span><FaGithub /></span>     
        </a>
        <a href='https://www.linkedin.com/in/zakaria-boughaba-447318283' className="linkedin">
          <span><FaLinkedin /></span>           
        </a>
        <a href='https://instagram.com/zack_web56?igshid=NGVhN2U2NjQ0Yg==' className="instagram">
          <span><FaInstagram /></span>     
        </a>
    </div>
  )
}

export default SocialIcons