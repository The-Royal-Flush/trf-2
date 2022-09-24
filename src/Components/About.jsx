import React, { useState } from "react";
import Header from "./Header";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer";

import imgAbout1 from "../images/Rectangle_19.svg";
import imgAbout2 from "../images/Rectangle_20.svg";
import imgAbout3 from "../images/Rectangle_21.svg";

import imgPerson1 from "../images/Rectangle 26.png";
import imgPerson2 from "../images/Rectangle 23.png";
import imgPerson3 from "../images/Rectangle 22.png";
import imgPerson4 from "../images/Rectangle 25.png";

import { Parallax, Background } from "react-parallax";

function About() {
  const [over, setOver] = useState(false);
  const [image, setImage] = useState(true);

  const [mouseIn, setMouseIn] = useState(false);

  return (
    <>
      {/* <AnimatedCursor
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
      /> */}

      <div className="about-head">
        <div className="title">
          <h4 className="fw-500 bw_select">
            Imagination comes to life,
            <br />
            Ethics meets tech and creativity.
          </h4>
        </div>
      </div>

      <div className="about-hero">
        <Parallax
          className="about-hero"
          bgImage={require("../images/about-bg-hero.png")}
          bgImageAlt="hero bg"
          strength={200}
        >
          <div
            style={{
              width: "100vw",
              height: "567px",
              display: "flex",
              margin: "auto 0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="heroHeading c-pointer flex fjs-sa">
              {/* <h2>The</h2> */}
              <h2 className="fs-100px text-stroke-v2">The Royal Flush</h2>
              {/* <h2>Flush</h2> */}
            </div>
          </div>
        </Parallax>
      </div>

      <section className="featured">
        <div className="title woAreWesHeader">
          <h6 className="fs-60px bw_select">
            Who
            <span className="text-stroke-v2"> are we ?</span>
          </h6>
        </div>
        <div className="featuredContent">
          <div className="featuredItem ">
            <div className="featureInfoAbout">
              <h2 className="bw_select">We are dreamers & thinkers 😇</h2>
              <h4 className="bw_select">
                Just a bunch of college We aim a vision. Our aim is to provide
                one of the best websites, portfolio designs, web interactions or
                just a wireframe.
              </h4>
            </div>

            <div className="featureImg ">
              <img src={imgAbout1} alt="Presence" className="w-60vh" />
            </div>
          </div>

          <div className="featuredItem fd-r-rev ">
            <div className="featureInfoAbout">
              <h2 className="bw_select">We put smile on people’s faces😄</h2>
              <h4 className="bw_select">
                Keeping up with the latest design trends, we help our clients
                gain insights on how to develop classy products that create a
                positive impact.
              </h4>
              <div className="services-btn"></div>
            </div>
            <div className="featureImg">
              <img src={imgAbout2} alt="Presence" className="w-60vh" />
            </div>
          </div>
          <div className="featuredItem">
            <div className="featureInfoAbout">
              <h2 className="bw_select">Help people time travel! 🌟</h2>
              <h4 className="bw_select">
                Have fun in doing things and make people reimagine the things
                they want. And we got everyone’s back!
              </h4>
            </div>
            <div className="featureImg">
              <img src={imgAbout3} alt="Presence" className="w-60vh" />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="title woAreWesHeader">
          <h6 className="fs-60px bw_select">
            Meet the
            <span className="text-stroke-v2"> Team !</span>
          </h6>

          <div className="imgTeamContainer">
            <div className="imgTeamLeft">
              <img src={imgPerson1} alt="Presence" className="w-60vh mb-975" />
              <img src={imgPerson2} alt="Presence" className="w-60vh mb-975" />
            </div>
            <div className="imgTeamRight">
              <img src={imgPerson3} alt="Presence" className="w-60vh mb-975" />
              <img src={imgPerson4} alt="Presence" className="w-60vh mb-975" />
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
      </div>
    </>
  );
}

export default About;
