import React, { useState } from "react";
import EventForm from "./EventForm.js";
import Event from "./Event.js";

function EventList() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);

    setEvents((prevEvents) =>
      prevEvents.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
    );
  };

  return <div>
    <h1>Scheduler</h1>
    <EventForm onSubmit={addEvent} />
    <h2>Upcoming Events</h2>
    <Event events={events} />
  </div>;
}

export default EventList;
