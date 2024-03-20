
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mayanknasa" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mayanknasa" target="__blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/mayanknasa4" target="__blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
