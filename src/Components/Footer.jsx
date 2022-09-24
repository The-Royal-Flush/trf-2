import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
function Footer({ setMouseIn }) {
  return (
    <div className="footer_main_container">
      <div className="footer_upper_container">
        <h1 className="bw_select_footer">Have an idea?</h1>
        <div className="font_underline ">
          <h1 className="bw_select_footer">Tell us about it</h1>
        </div>
      </div>
      <div className="footer_bottom_container">
        <div className="footer_contacts">
          <div className="contacts_email">
            <h2 className="bw_select_footer">workfortrf@gmail.com</h2>
          </div>
          <div className="contacts_address">
            <h5 className="bw_select_footer">Pune, India</h5>
          </div>
          <div className="contacts_pp">
            <h5 className="bw_select_footer">Privacy Policy</h5>
          </div>
        </div>
        <div className="footer_socials">
          <div className="socials_upper">
            <span className="social_links bw_select_footer">LinkedIn</span>
            <span className="social_links bw_select_footer">Twitter</span>
            <span className="social_links bw_select_footer">Instagram</span>
          </div>
          <div className="socials_bottom">
            <span className="social_links bw_select_footer">Discord</span>
            {/* <span className="social_links">Discord</span> */}
            {/* <span className="social_links">Discord</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
