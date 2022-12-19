
import "./Contact.css"
import {MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oicqd87', 'template_n2cvnkd', form.current, 'fbG2SfecSnrnm4-zE')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className="contact-methods">
        <article className='contact-method'>
          <div className='contact-icon-option'>
            <MdOutlineEmail/>
          </div>
          <h4>Email</h4>
          <h5>shakuntla.ravani@gmail.com</h5>
          <a href="mailto:shakuntla.ravani@gmail.com" target="_blank" className=''>Send a Message</a>
        </article>
        <article className='contact-method'>
          <div className='contact-icon-option'>
            <RiMessengerLine/>
          </div>
          <h4>Messenger</h4>
          <h5>shakuntla Ravani</h5>
          <a href="https://m.me/shakuntla.ravani"  target="_blank"className=''>Send a Message</a>
        </article>
        <article className='contact-method'>
          <div className='contact-icon-option'>
            <BsWhatsapp/>
          </div> 
          <h4>WhatsApp</h4>
          {/* <h5>+91-7878156327</h5> */}
          <a href="https://api.whatsapp.com/send?phone=917878156327" target="_blank">Send a Message</a>
        </article>
        </div>
        <div >        <form action="" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Your Full Name' name='name' required/>
        <input type="email" name='email' placeholder='Your Emaill Address' required/>
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button type="submit" className='btn btn-primary'> Send Message</button>
        </form>
        </div>

      </div>
    </section>
  )
}
