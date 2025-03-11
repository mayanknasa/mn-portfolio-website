import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiCommentCheck } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#", icon: <AiOutlineHome />, text: "Home" },
    { href: "#about", icon: <AiOutlineUser />, text: "About" },
    { href: "#experience", icon: <BiBook />, text: "Skills" },
    { href: "#portfolio", icon: <VscFolderLibrary />, text: "Projects" },
    { href: "#testimonials", icon: <BiCommentCheck />, text: "Reviews" },
    { href: "#contact", icon: <BiMessageSquareDetail />, text: "Contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`nav__wrapper ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="nav__container">
          <motion.div 
            className="nav__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/#">MN</a>
          </motion.div>

          <div className="nav__desktop">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                className={activeNav === item.href ? "active" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav__text">{item.text}</span>
                {activeNav === item.href && (
                  <motion.div
                    className="nav__indicator"
                    layoutId="desktopIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="nav__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="nav__mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={activeNav === item.href ? "active" : ""}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav__icon">{item.icon}</span>
                <span className="nav__text">{item.text}</span>
                {activeNav === item.href && (
                  <motion.div
                    className="nav__indicator"
                    layoutId="mobileIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
