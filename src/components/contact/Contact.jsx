import { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Modal from "./Modal";

const Contact = () => {
  const form = useRef();
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: "",
    message: ""
  });
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('mayanknasa-portfolio', 'template_z9sbzxb', form.current, 'gG1htBop0b7WGCJYs')
      .then((result) => {
        console.log(result.text);
        setModalState({
          isOpen: true,
          status: "success",
          message: "Your message has been sent successfully! I'll get back to you soon."
        });
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setModalState({
          isOpen: true,
          status: "error",
          message: "Failed to send message. Please try again or reach out via email directly."
        });
      });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <motion.article 
            className="contact__option"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mayanknasa4@gmail.com</h5>
            <a href="mailto:mayanknasa4@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </motion.article>

          <motion.article 
            className="contact__option"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaSquareXTwitter className="contact__option-icon" />
            <h4>X</h4>
            <h5>@mayanknasa4</h5>
            <a href="https://x.com/messages/compose?recipient_id=1551439168206622720" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </motion.article>

          <motion.article 
            className="contact__option"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>mayanknasa</h5>
            <a href="https://www.linkedin.com/in/mayanknasa" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </motion.article>
        </div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Send me a message 💬</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </motion.form>
      </div>

      <Modal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        status={modalState.status}
        message={modalState.message}
      />
    </section>
  );
};

export default Contact;
