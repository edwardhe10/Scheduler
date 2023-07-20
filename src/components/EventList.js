import React, { useState } from "react";
import EventForm from "./EventForm.js";
import Event from "./Event.js";

function EventList() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    // Sort so that earliest event is the most recent (at the top)
    // Convert to Date objects
    setEvents(
      [event, ...events].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  const deleteEvent = (id) => {
    const deletedEventArr = [...events].filter((event) => event.id !== id);
    setEvents(deletedEventArr);
  };

  return (
    <div>
      <h1>Scheduler</h1>
      <EventForm onSubmit={addEvent} />
      <h2>Upcoming Events</h2>
      <Event events={events} deleteEvent={deleteEvent} />
    </div>
  );
}

export default EventList;
