import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5yl6ipp', 'template_nv09j8i', form.current, 'M6oykr3PrUueQJ00x')
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

      };

    return (
        <div className='join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>ready to </span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body </span>
                    <span className='stroke-text'>with us?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} onSubmit={sendEmail} className="email-container">
                    <input type="email" name="user-email" placeholder='Enter your Email Address' id="" />
                    <button className='btn btn-j'>Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
