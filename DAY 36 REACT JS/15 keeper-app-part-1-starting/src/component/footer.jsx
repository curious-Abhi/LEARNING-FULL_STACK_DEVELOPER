import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Abhi Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
