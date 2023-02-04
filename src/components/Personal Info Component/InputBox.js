import React, { useState, useEffect } from "react";

function InputBox({
  watch,
  errors,
  register,
  labelTitle,
  placeholderValue,
  name,
  registerValue,
  patternValue,
  inputWarningText,
}) {
  const [borderColor, setBorderColor] = useState("1px solid #BCBCBC");

  const inputValue = watch(registerValue);

  useEffect(() => {
    if (typeof inputValue === "string") {
      if (inputValue.length > 0) {
        if (errors[registerValue]) {
          setBorderColor("1px solid #EF5050");
        } else {
          setBorderColor("1px solid #98E37E");
        }
      }
    }

    if (typeof inputValue === "string") {
      if (inputValue.length === 0) {
        setBorderColor("1px solid #EF5050");
      }
    }
  }, [errors[registerValue], borderColor, inputValue]);

  return (
    <div className="input-box">
      <label className="input-label-title">{labelTitle}</label>
      <input
        type="text"
        placeholder={placeholderValue}
        name={name}
        {...register(registerValue, {
          required: true,
          pattern: patternValue,
          minLength: 2,
        })}
        style={{ border: borderColor }}
      />
      <span className="input-warning">{inputWarningText}</span>
    </div>
  );
}

export default InputBox;
