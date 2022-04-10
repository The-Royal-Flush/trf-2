import React, { useState } from "react";
import Header from "./Header";
import PresenceImg from "../images/presence-featureImg.png";
import SlanceImg from "../images/slance-featureImg.png";
import TRFImg from "../images/trf-featureImg.png";
import AnimatedCursor from "react-animated-cursor";
import AboutBgHero from "../images/about-bg-hero.png";
import Img1 from "../images/Rectangle_19.svg";
import Img2 from "../images/Rectangle_21.svg";
import Gif1 from "../images/gif1.gif";

function About() {
  const [over, setOver] = useState(false);
  const [image, setImage] = useState(true);
  return (
    <>
      <Header />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="0, 0, 0"
        outerAlpha={0.2}
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
          "h2",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="about-head"></div>
      <div className="about-hero">
        <div className="heroHeading text-stroke c-pointer flex fjs-sa">
          <h2>The</h2>
          <h2>Royal</h2>
          <h2>Flush</h2>
        </div>
      </div>

      <section className="featured">
        <div className="featuredContent">
          <div className="featuredItem ">
            <div className="featureInfo">
              <h2>Websites and Platforms</h2>
              <h4>
                In our team, the designers and developers work alongside each
                other. It is exciting to see them in action to create products
                which is perfectly suited to its users.
              </h4>
            </div>
            <div className="featureImg ">
              <img src={PresenceImg} alt="Presence" className="w-60vh" />
            </div>
          </div>

          <div className="featuredItem fd-r-rev ">
            <div className="featureInfo">
              <h2>Design Concepts</h2>
              <h4>
                We design what we think. Imaginations come to life with awesome
                design concepts and prototypes presented. We make people time
                travel!!
              </h4>
              <div className="services-btn"></div>
            </div>
            <div className="featureImg">
              <img src={SlanceImg} alt="Presence" className="w-60vh" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfo">
              <h2>Performance SEOs</h2>
              <h4>
                Want to get yourself noticed, we have devised strategies and
                tools to make you visible on the web. The brands are now
                recognized more!
              </h4>
            </div>
            <div className="featureImg">
              <img src={TRFImg} alt="Presence" className="w-60vh" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
