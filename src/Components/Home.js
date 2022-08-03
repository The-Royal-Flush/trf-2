// import {link} from '../routes';
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PresenceImg from "../images/presence-featureImg.png";
import SlanceImg from "../images/slance-featureImg.png";
import TRFImg from "../images/trf-featureImg.png";
import AnimatedCursor from "react-animated-cursor";

import { useState } from "react";
import Img1 from "../images/Rectangle_19.svg";
import Img2 from "../images/Rectangle_21.svg";
import Gif1 from "../images/gif1.gif";
import Footer, { mouseIn } from "./Footer";

function Home() {
  const [mouseIn, setMouseIn] = useState(false);
  const [over, setOver] = useState(false);
  const [image, setImage] = useState(true);

  return (
    <div>
      <Header />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color={mouseIn === false ? "0, 0, 0" : "255, 255, 255"}
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "img",
          "h1",
          "h2",
          "textarea",
          "button",
          ".link",
          ".hamburger-react",
          ".social_links",
        ]}
      />
      <section className="hero text-selection">
        <div className="heroTitle">
          <h6 className="bw_select">We'll do it for you!</h6>

          <div className="heroHeading  c-pointer">
            <div
            // onMouseOver={() => setOver(true)}
            // onMouseOut={() => setOver(false)}
            // onMouseOver={() => setImage(false)}
            // onMouseOut={() => setImage(true)}
            >
              <h1 className="text-stroke">Websites</h1>
              <img
                style={{ display: image === true ? "none" : "static" }}
                className="HoverImages"
                src={over ? Gif1 : Img1}
              />
            </div>

            <h1 className="text-stroke">Portfolios</h1>
            <h1 className="text-stroke">Branding</h1>
          </div>
        </div>
        <h3 className="heroSubTitle bw_select">
          The Royal Flush designs and develops products for you. We build
          portfolio websites, web applications, and elaborate online business
          services.
        </h3>
      </section>
      <section className="featured">
        <div className="title featureHeader">
          <h6 className="bw_select">featured</h6>
          <h6 className="text-stroke bw_select">Creations</h6>
        </div>
        <div className="featuredContent">
          <div className="featuredItem">
            <div className="featureInfo">
              <p className="bw_select">Presence</p>
              <h2 className="bw_select">Web Application For Attendance</h2>
              <h4 className="bw_select">web application, design, product, college</h4>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <p className="bw_select">Slance</p>
              <h2 className="bw_select">E-Commerce for shoe brands</h2>
              <h4 className="bw_select">web application, design, product</h4>
            </div>
            <div className="featureImg">
              <img src={SlanceImg} alt="Presence" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <p className="bw_select">TRF</p>
              <h2 className="bw_select">Service helping you create Products</h2>
              <h4 className="bw_select">web application, design, product, Startup</h4>
            </div>
            <div className="featureImg">
              <img src={TRFImg} alt="Presence" />
            </div>
          </div>
        </div>
        <button className="btn-products bw_select">View all projects</button>
      </section>

      <section className="services">
        <div className="title servicesHeader">
          <h6 className="bw_select">
            What
            <span className="text-stroke bw_select"> we do ?</span>
          </h6>
        </div>

        <h3 className="servicesSubTitle bw_select">
          Strategy is our key, we look through the problem to figure out what is
          essential. Then, we design a solution that not only takes care of the
          user but also is optimized for a long-term perspective. We keep our
          deadlines into considerations and deliver you the product in the most
          promising way.
        </h3>
      </section>

      <section className="featured">
        <div className="featuredContent">
          <div className="featuredItem">
            <div className="featureInfo">
              <h2 className="bw_select">Websites and Platforms</h2>
              <h4 className="bw_select">
                In our team, the designers and developers work alongside each
                other. It is exciting to see them in action to create products
                which is perfectly suited to its users.
              </h4>
              <button className="btn-products  btn-service-inner bw_select">
                View all projects
              </button>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="featureInfo">
              <h2 className="bw_select">Design Concepts</h2>
              <h4 className="bw_select">
                We design what we think. Imaginations come to life with awesome
                design concepts and prototypes presented. We make people time
                travel!!
              </h4>
              <div className="services-btn">
                <button className="btn-products  btn-service-inner bw_select">
                  View all projects
                </button>
              </div>
            </div>
            <div className="featureImg">
              <img src={SlanceImg} alt="Presence" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <h2 className="bw_select">Performance SEOs</h2>
              <h4 className="bw_select">
                Want to get yourself noticed, we have devised strategies and
                tools to make you visible on the web. The brands are now
                recognized more!
              </h4>
              <button className="btn-products bw_select btn-service-inner">
                View all projects
              </button>
            </div>
            <div className="featureImg">
              <img src={TRFImg} alt="Presence" />
            </div>
          </div>
        </div>
      </section>
      <div
        onMouseEnter={() => {
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          setMouseIn(false);
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Home;
