import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsCheck2Circle } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { IoClose } from "react-icons/io5";
import { TbFaceIdError} from "react-icons/tb";

const Contact = () => {
  const form = useRef();
  const closeResponseBox= ()=>{
    document.querySelector('.response-box').classList.remove('active-div');
  }
  const sendEmail = (e) => {
    e.preventDefault();
    document.querySelector('.response-box').classList.add('active-div')
    emailjs.sendForm('mayanknasa-portfolio', 'template_z9sbzxb', form.current, 'gG1htBop0b7WGCJYs')
      .then((result) => {
          console.log(result.text);
          document.querySelector('.sending-message').classList.add('inactive-div');
          document.querySelector('.form-submit-success').classList.add('active-div');
      }, (error) => {
          console.log(error.text);
          document.querySelector('.sending-message').classList.add('inactive-div');
          document.querySelector('.form-submit-fail').classList.add('active-div');
      });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mayanknasa4@gmail.com</h5>
            <a href="mailto:mayanknasa4@gmail.com" target="__blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@mayanknasa4</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1551439168206622720"
              className="twitter-dm-button"
              data-screen-name="@mayanknasa4"
              target="__blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>mayanknasa</h5>
            <a
              href="https://www.linkedin.com/in/mayanknasa"
              target="__blank"
            >
              Connect
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
        <h2>Feel free to reach me by filling the form below &#128229;</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea
            type="text"
            name="message"
            rows="9"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" value="Send">
            Send Message
          </button>
        </form>
        </div>
        <div className="response-box inactive-div">
        <IoClose className="close-icon" onClick={closeResponseBox}/>
        <div className="sending-message">
        Sending Message...</div>
        <div className="form-submit-success inactive-div">
          <BsCheck2Circle className="response-icon"/>
              Thankyou !<br/>
              I will get back to you soon.
          </div>
          <div className="form-submit-fail inactive-div">
            <TbFaceIdError className="response-icon"/>
            Some Technical Error.<br/>
            You can email me by clicking <a href="mailto:mayanknasa4@gmail.com" target="__blank">
              here.
            </a>
            </div></div>
    </section>
  );
};
export default Contact;
