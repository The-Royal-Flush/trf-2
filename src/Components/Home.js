// import {link} from '../routes';
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PresenceImg from "../images/presence-gif.png";
import { useState } from "react";
import Img1 from '../images/Rectangle_19.svg'
import Img2 from '../images/Rectangle_21.svg'
import Gif1 from '../images/gif1.gif'
function Home() {
  const [over, setOver] = useState(false);
  const [image, setImage] = useState(true)
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="heroTitle">
          <h6>We'll do it for you!</h6>
          <div className="heroHeading">
            <div
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              onMouseOver={() => setImage(false)}
              onMouseOut={() => setImage(true)}
            ><h1>Websites</h1>
              <img style = {{display: (image === true ? 'none': 'static')}} className="HoverImages"
                src={over ? Gif1 : Img1 }                
              />
            </div>
             <h1>Portfolios</h1>
            <h1>Branding</h1>
          </div>
        </div>
        <h3 className="heroSubTitle">
          The Royal Flush designs and develops products for you. We build
          portfolio websites, web applications, and elaborate online business
          services.
        </h3>
      </section>
      <section className="featured">
        {/* <div className="title featureTitle">
                    <h3>Featured</h3>
                    <h3>Creation</h3>
                </div> */}
        <div className="featuredContent">
          
          <div className="featuredItem">
            <div className="featureInfo">
              <p>Presence</p>
              <h2>Web Application For Attendance</h2>
              <h4>web application, design, product, college</h4>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="featureInfo">
              <p>Presence</p>
              <h2>Web Application For Attendance</h2>
              <h4>web application, design, product, college</h4>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="featureInfo">
              <p>Presence</p>
              <h2>Web Application For Attendance</h2>
              <h4>web application, design, product, college</h4>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>

        </div>
        <button className="btn-products">View all projects</button>
      </section>
    </div>
  );
}

export default Home;
