import React from "react";
import styled from "styled-components";
import { useState } from "react";

const PillBtnContainer = styled.button`
  margin: 2rem 1rem;
`;

const Placeholder = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

PillBtnContainer.defaultProps = {
  text: "Dummy Text",
};

function PillButton(props) {
  const [toggle, setToggle] = useState(true);
  const handleClicks = () => {
    setToggle((current) => !current);
  };

  return (
    <PillBtnContainer
      className="btn-products  btn-service-inner bw_select"
      onClick={handleClicks}
      style={{
        backgroundColor: toggle ? "white" : "black",
        color: toggle ? "black" : "white",
      }}
    >
      <Placeholder>{props.text}</Placeholder>
    </PillBtnContainer>
  );
}

export default PillButton;
