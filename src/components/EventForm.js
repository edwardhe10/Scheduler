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

    if (!eventName || !eventDate) {
      alert("Please enter a valid event name and date.");
      return;
    }

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
        placeholder="Event"
        value={eventName}
        onChange={handleNameChange}
      />
      <input type="date" value={eventDate} onChange={handleDateChange} />
      <input
        type="text"
        placeholder="Details..."
        value={eventDescription}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
