import React from "react";

function Footer() {
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
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
          <div className="socials_bottom">
            <div>Discord</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
