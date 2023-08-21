import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles.css";

import FancyRegistration from "./FancyRegistration";
import StyledWrapper from "./Styles";

function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <FancyRegistration />
      </StyledWrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
