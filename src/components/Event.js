import React from "react";
import { TiDelete } from "react-icons/ti";

function Event({ events, deleteEvent }) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="event-box">
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          {event.description && <p>{event.description}</p>}
          <TiDelete
            onClick={() => deleteEvent(event.id)}
            className="delete-icon"
          />
        </div>
      ))}
    </div>
  );
}

export default Event;
