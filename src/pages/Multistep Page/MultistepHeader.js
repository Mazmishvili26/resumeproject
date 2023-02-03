import React from "react";

// import assets
import leftArrow from "../../assets/leftArrow.png";

function MultistepHeader({ step }) {
  return (
    <div className="multistep-header">
      {step === 1 && "erts"}
      {step === 2 && "ors"}
    </div>
  );
}

export default MultistepHeader;
