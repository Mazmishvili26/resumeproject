import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Multistep.css";

// import components
import PersonalInfo from "../../components/Personal Info Component/PersonalInfo";
import Experience from "../../components/Experience Component/Experience";
import Education from "../../components/Education Component/Education";
import MultistepHeader from "./MultistepHeader";

function Multistep() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleNext = () => {
    handleSubmit();
  };

  return (
    <section className="main-section">
      {step === 1 && (
        <PersonalInfo
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          setStep={setStep}
          step={step}
        />
      )}
      {step === 2 && <Experience step={step} />}
      {step === 3 && <Education />}
    </section>
  );
}

export default Multistep;
