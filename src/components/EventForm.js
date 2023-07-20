import React, { useState } from "react";
import uuid from "react-uuid";

const EventForm = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuid(),
      name: eventName,
      date: eventDate,
      description: eventDescription,
    });
    setEventName("");
    setEventDate("");
    setEventDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Details..."
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
