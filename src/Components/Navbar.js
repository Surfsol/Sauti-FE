import React from "react";
import "../index.css";
import imgLogo from "../../../assets/images/web-logo-light.png";

const NavBar = () => {
  return (
    <div className="TopBar">
      <div className="Sauti-Logo">
        <Image src={imgLogo} alt="CBT Insights by Sauti East Africa" />
      </div>
      <div className="Navigation">
        <a href="http://sautiafrica.org/">HOME</a>
        <a href="http://sautiafrica.org/our-approach/">ABOUT US</a>
        <a href="http://sautiafrica.org/information-platform/">SERVICES</a>
        <a href="http://sautiafrica.org/our-team/">OUR TEAM</a>
        <a href="http://sautiafrica.org/news/">NEWS & UPDATES</a>
        <a href="http://sautiafrica.org/contact/">CONTACT US</a>
      </div>
    </div>
  );
};

export default NavBar;
