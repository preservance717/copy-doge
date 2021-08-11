import React, { useState } from "react";
import CopyDoge from "../components/CopyDoge";

const CopyDogeContainer = () => {
  const [value, setValue] =  useState("");
  const [isCopying, setIsCopying] =  useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const toggleTape = () => {
    setTimeout(() => {
      setIsCopying(!isCopying);
    }, 500);
  }

  return (
    <CopyDoge 
      value={value} 
      handleChange={handleChange}
      isCopying={isCopying}
      toggleTape={toggleTape}
    />
  )
};

export default CopyDogeContainer;