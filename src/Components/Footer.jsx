import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
function Footer({ setMouseIn }) {
  return (
    <div className="footer_main_container">
      <div className="footer_upper_container">
        <h1>Have an idea?</h1>
        <div className="font_underline ">
          <h1>Tell us about it</h1>
        </div>
      </div>
      <div className="footer_bottom_container">
        <div className="footer_contacts">
          <div className="contacts_email">
            <h2>workfortrf@gmail.com</h2>
          </div>
          <div className="contacts_address">
            <h5>Pune, India</h5>
          </div>
          <div className="contacts_pp">
            <h5>Privacy Policy</h5>
          </div>
        </div>
        <div className="footer_socials">
          <div className="socials_upper">
            <span className="social_links">LinkedIn</span>
            <span className="social_links">Twitter</span>
            <span className="social_links">Instagram</span>
          </div>
          <div className="socials_bottom">
            <span className="social_links">Discord</span>
            {/* <span className="social_links">Discord</span> */}
            {/* <span className="social_links">Discord</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
