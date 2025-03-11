import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  const socialLinks = [
    {
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/mayanknasa",
      label: "LinkedIn",
      delay: 0.1
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/mayanknasa",
      label: "GitHub",
      delay: 0.2
    },
    {
      icon: <BsTwitter />,
      href: "https://twitter.com/mayanknasa4",
      label: "Twitter",
      delay: 0.3
    }
  ];

  return (
    <div className="header__socials">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: social.delay }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default HeaderSocials;
