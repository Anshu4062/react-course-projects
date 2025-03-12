import React from "react";

function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer> {buttons} </ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
