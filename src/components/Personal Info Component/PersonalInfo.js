import React, { useCallback } from "react";
import MultistepHeader from "../../pages/Multistep Page/MultistepHeader";
import "./PersonalInfo.css";

function PersonalInfo({ register, errors, handleSubmit, setStep, step }) {
  const nextPage = (e) => {
    e.preventDefault();
    handleSubmit(() => {
      setStep(step + 1);
    })();
  };

  return (
    <section className="personalInfo-section">
      <div className="personalInfo-container">
        <div className="left-side">
          <MultistepHeader step={step} />
          <form onSubmit={nextPage}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            <p>{errors.firstName && "aq ragac eroria"}</p>
            <button type="submit" onClick={nextPage}>
              next
            </button>
          </form>
        </div>
        <div className="right-side">right</div>
      </div>
    </section>
  );
}

export default PersonalInfo;
