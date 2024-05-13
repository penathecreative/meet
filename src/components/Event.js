// src/components/Event.js

import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <div>
        <h2>{event.summary}</h2>
        <p>{event.created}</p>
        <p>{event.location}</p>
        <button
          onClick={handleToggleDetails}
          data-testid="show-details-button"
        >
          {showDetails ? "hide details" : "show details"}
        </button>
        {showDetails && (
          <div className="details">
            <h4>event details</h4>
            <p>{event.description}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default Event;
