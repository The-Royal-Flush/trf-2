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

function PillButton({ budgetData, selectedBudget, setSelectedBudget }) {
  const [toggle, setToggle] = useState(true);
  const handleClicks = () => {
    setToggle((current) => !current);
  };

  const handleSelect = () => {
    setSelectedBudget(
      selectedBudget === budgetData.id ? undefined : budgetData.id
    );
  };

  return (
    <PillBtnContainer
      className="btn-products  btn-service-inner bw_select"
      onClick={handleSelect}
      style={{
        backgroundColor: selectedBudget === budgetData.id ? "black" : "white",
        color: selectedBudget === budgetData.id ? "white" : "black",
      }}
    >
      <Placeholder>{budgetData.name}</Placeholder>
    </PillBtnContainer>
  );
}

export default PillButton;
