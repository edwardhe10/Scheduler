import React from "react";

function Event({ events }) {
  return (
    <div>
      {events.map((event) => (
        <div>
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          {event.description && <p>Description: {event.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default Event;
