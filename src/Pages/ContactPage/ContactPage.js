import React from "react";
import './ContactPage.css'
import Titles from '../../components/Titles/Titles'
import Button from '../../components/Button/Button';
import { BsFillSendCheckFill } from "react-icons/bs";
import Contact_img from '../../assets/contact_img.jpg'
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages'
import MoveToNextPage from "../../sections/MoveToNextPage/MoveToNextPage";

export default function ContactPage() {
  return (
    <>
        <FirstSectionOfPages title="Contact Me" logo={Contact_img} />
        <div className="container">
            <section className="contact my-5" id="contact">
                <Titles title="contact me" />
                <div className="d-flex flex-wrap justify-content-between " id="mobile_column">
                    <div className="text">
                        <h1>Send me a message</h1>
                        <p className="text_desc">Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
                        <p className="contact_note">
                            <span>Note</span> <br />
                            This Contact Form is not Available For Sending Messages Right Now, <br /> I Will Fix It Soon... , If You Want To send me a Message Here is My Contact Information :
                        </p>
                        <div className="contact_infos">
                            <p><span>Whatsapp : </span> +212-674362291 or just &nbsp; <a href="https://wa.me/qr/OK6FDXMFVZOEE1" _blank>click Here</a></p>
                            <p><span>Email : </span> boughaba.zakariyae@gmail.com</p>
                        </div>
                    </div>
                    <form action="" data-aos="zoom">

                        <div className="inputBox">
                            <input type="text" placeholder="your name" data-aos="fade-up" />
                            <input type="email" placeholder="your email" data-aos="fade-up" />
                        </div>

                        <textarea name="message" placeholder="your message" cols="30" rows="10" data-aos="fade-up"></textarea>
                        
                        <button type="submit" className='s_btn'>
                            <Button title="send message" icon={<BsFillSendCheckFill />} />
                        </button>

                    </form>
                </div>
            </section>
        </div>
        <MoveToNextPage move_title="Back To Home" move_link="/" />
    </>
  );
}
