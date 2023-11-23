import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const HarvardCollege = () => {
  const initialStudyRooms = [
    { id: 1, title: 'Room 101', start: new Date(2023, 10, 1, 9, 0), end: new Date(2023, 10, 1, 17, 0) },
    { id: 2, title: 'Room 102', start: new Date(2023, 10, 2, 9, 0), end: new Date(2023, 10, 2, 17, 0) },
    { id: 3, title: 'Room 103', start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
  ];

  const [studyRooms, setStudyRooms] = useState(initialStudyRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    setSelectedRoom(null);
    setSelectedTime({ start, end });
  };

  const handleSelectEvent = (event) => {
    setSelectedRoom(event);
    setSelectedTime(null);
  };
  const handleReserve = () => {
    if (selectedRoom && selectedTime) {
      // Implement your reservation logic here
      alert(`Room ${selectedRoom.title} reserved from ${moment(selectedTime.start).format('LLL')} to ${moment(selectedTime.end).format('LLL')}`);
    } else {
      alert('Please select a room and time slot for reservation.');
    }
  };

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Harvard College</h2>
      <div style={{ margin: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <Calendar
          localizer={localizer}
          events={studyRooms}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          style={{ height: '400px' }}
        />
      </div>
      {selectedTime && (
        <div style={{ textAlign: 'center' }}>
          <p>Selected Time: {moment(selectedTime.start).format('LLL')} to {moment(selectedTime.end).format('LLL')}</p>
          <button onClick={handleReserve}>Reserve Room</button>
        </div>
      )}
      {selectedRoom && (
        <div style={{ textAlign: 'center' }}>
          <p>Selected Room: {selectedRoom.title}</p>
          <p>Time Available: {moment(selectedRoom.start).format('LLL')} to {moment(selectedRoom.end).format('LLL')}</p>
          <p>Administrative Head: {selectedRoom.administrativeHead || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default HarvardCollege;
