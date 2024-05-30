import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventNumber, setEventNumber] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        id="numberOfEvents"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
