import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['#', '#about', '#experience', '#portfolio', '#contact'];
      const current = sections.find(section => {
        if (section === '#') return window.scrollY < 300;
        const element = document.querySelector(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (current) setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#", icon: <AiOutlineHome />, text: "Home" },
    { href: "#about", icon: <AiOutlineUser />, text: "About" },
    { href: "#experience", icon: <BiBook />, text: "Experience" },
    { href: "#portfolio", icon: <AiOutlineFolderOpen />, text: "Portfolio" },
    { href: "#contact", icon: <AiOutlineMail />, text: "Contact" }
  ];

  return (
    <motion.nav
      className={`nav ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            className={activeNav === item.href ? "active" : ""}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
            <span className="nav-tooltip">{item.text}</span>
          </motion.a>
        ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
