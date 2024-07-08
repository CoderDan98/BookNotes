import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; {currentYear} All rights reserved.</p>
    </div>
  );
};

export default Footer;
