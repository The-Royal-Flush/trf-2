// import {link} from '../routes';
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PresenceImg from "../images/presence-featureImg.png";
import SlanceImg from "../images/slance-featureImg.png";
import TRFImg from "../images/trf-featureImg.png";
import AnimatedCursor from "react-animated-cursor"

import { useState } from "react";
import Img1 from "../images/Rectangle_19.svg";
import Img2 from "../images/Rectangle_21.svg";
import Gif1 from "../images/gif1.gif";

function Home() {

  const [over, setOver] = useState(false);
  const [image, setImage] = useState(true);
  return (
    <div>
      <Header />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'img',
          'h1',
          'textarea',
          'button',
          '.link'
        ]}

      />
      <section className="hero">
        <div className="heroTitle">
          <h6>We'll do it for you!</h6>

          <div className="heroHeading text-stroke c-pointer">
            <div
            // onMouseOver={() => setOver(true)}
            // onMouseOut={() => setOver(false)}
            // onMouseOver={() => setImage(false)}
            // onMouseOut={() => setImage(true)}
            >
              <h1>Websites</h1>
              <img
                style={{ display: image === true ? "none" : "static" }}
                className="HoverImages"
                src={over ? Gif1 : Img1}
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
        <div className="title featureHeader">
          <h6>featured</h6>
          <h6 className="text-stroke">Creations</h6>
        </div>
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
              <p>Slance</p>
              <h2>E-Commerce for shoe brands</h2>
              <h4>web application, design, product</h4>
            </div>
            <div className="featureImg">
              <img src={SlanceImg} alt="Presence" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <p>TRF</p>
              <h2>Service helping you create Products</h2>
              <h4>web application, design, product, Startup</h4>
            </div>
            <div className="featureImg">
              <img src={TRFImg} alt="Presence" />
            </div>
          </div>
        </div>
        <button className="btn-products">View all projects</button>
      </section>

      <section className="services">
        <div className="title servicesHeader">
          <h6>
            What
            <span className="text-stroke"> we do ?</span>
          </h6>
        </div>

        <h3 className="servicesSubTitle">
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
              <h2>Websites and Platforms</h2>
              <h4>In our team, the designers and developers work alongside each other. It is exciting to see them in action to create products which is perfectly suited to its users.</h4>
              <button className="btn-products  btn-service-inner">View all projects</button>
            </div>
            <div className="featureImg">
              <img src={PresenceImg} alt="Presence" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="featureInfo">
              <h2>Design Concepts</h2>
              <h4>We design what we think. Imaginations come to life with awesome design concepts and prototypes presented. We make people time travel!!</h4>
              <div className="services-btn">
                <button className="btn-products  btn-service-inner ">View all projects</button>
              </div>
            </div>
            <div className="featureImg">
              <img src={SlanceImg} alt="Presence" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <h2>Performance SEOs</h2>
              <h4>Want to get yourself noticed, we have devised strategies and tools to make you visible on the web. The brands are now recognized more!</h4>
              <button className="btn-products  btn-service-inner">View all projects</button>
            </div>
            <div className="featureImg">
              <img src={TRFImg} alt="Presence" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
