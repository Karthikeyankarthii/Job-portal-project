import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved by Karthi .</div>
      <div>
        <Link to={"https://github.com/Karthikeyankarthii/"} target="github">
          <FaGithub></FaGithub>
        </Link>

        <Link
          to={"https://www.linkedin.com/in/karthi-k-7148892a0/"}
          target="linkedin"
        >
          <FaLinkedin></FaLinkedin>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
