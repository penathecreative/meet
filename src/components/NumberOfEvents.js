import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    let errorText;
    if (value <= 0) {
      errorText = "Only numbers higher than 0 allowed.";
    } else {
      errorText = "";
    }
    setEventNumber(value);
    setCurrentNOE(value);
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        id="numberOfEvents"
        className="number-of-events"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
