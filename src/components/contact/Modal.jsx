import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import "./modal.css";

const Modal = ({ isOpen, onClose, status, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-container"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <IoMdClose />
            </button>
            
            <div className="modal-content">
              <div className={`modal-icon ${status}`}>
                {status === "success" ? <BiCheckCircle /> : <BiErrorCircle />}
              </div>
              <h3>{status === "success" ? "Success!" : "Oops!"}</h3>
              <p>{message}</p>
              
              {status === "error" && (
                <div className="modal-fallback">
                  <p>You can also reach me directly at:</p>
                  <a 
                    href="mailto:mayanknasa4@gmail.com"
                    className="fallback-link"
                  >
                    <FiMail />
                    mayanknasa4@gmail.com
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal; 