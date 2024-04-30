// src/components/Event.js

import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h2>{event.summary}</h2>
      <p>Start Time: {event.created}</p>
      <p>Location: {event.location}</p>
      <button
        onClick={handleToggleDetails}
        data-testid="show-details-button"
      >
        {showDetails ? "hide details" : "show details"}
      </button>
      {showDetails && (
        <div data-testid="event-details">{/* Render event details here */}</div>
      )}
    </div>
  );
};

export default Event;
