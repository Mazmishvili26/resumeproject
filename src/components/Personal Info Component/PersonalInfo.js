import React, { useCallback, useState, useEffect } from "react";
import MultistepHeader from "../../pages/Multistep Page/MultistepHeader";
import InputBox from "./InputBox";
import "./PersonalInfo.css";

function PersonalInfo({
  register,
  errors,
  handleSubmit,
  setStep,
  step,
  watch,
}) {
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
          <form onSubmit={nextPage} className="form-wrapper container">
            <div className="userInfo-container">
              <InputBox
                labelTitle="სახელი"
                placeholderValue="ანზორ"
                name="firstName"
                registerValue="firstName"
                patternValue={/^[\u10A0-\u10FF\s]+$/}
                inputWarningText="მინიმუმ 2 ასო, ქართული ასოები"
                watch={watch}
                errors={errors}
                register={register}
              />
              <InputBox
                labelTitle="გვარი"
                placeholderValue="მუმლაძე"
                name="lastName"
                registerValue="lastName"
                patternValue={/^[\u10A0-\u10FF\s]+$/}
                inputWarningText="მინიმუმ 2 ასო, ქართული ასოები"
                watch={watch}
                errors={errors}
                register={register}
              />
            </div>
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
