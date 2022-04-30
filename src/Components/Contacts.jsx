import { useEffect,useState } from "react";
import React from "react";
import Header from "./Header";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer";

function Contacts() {
    const [mouseIn, setMouseIn] = useState(false);
    const [over, setOver] = useState(false);

  return (
    <>
        <Header></Header>
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
          "textarea",
          "button",
          ".link",
          ".hamburger-react"
        ]}
      />


        <div>Contacts</div>

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
    </>
  );
}

export default Contacts;
