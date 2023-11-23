import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BuildingSelector = ({ buildings, onSelectBuilding }) => {
  return (
    <div>
      <h3>Select a Building:</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {buildings.map(building => (
          <div key={building.id} style={{ cursor: 'pointer' }} onClick={() => onSelectBuilding(building)}>
            <img
              src={building.image}
              alt={building.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p style={{ textAlign: 'center' }}>{building.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoomSelector = ({ rooms, onSelectRoom }) => {
  return (
    <div>
      <h3>Select a Room:</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {rooms.map(room => (
          <button key={room.id} style={{ cursor: 'pointer' }} onClick={() => onSelectRoom(room)}>
            {room.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const HarvardCollege = () => {
  const initialBuildings = [
    { id: 1, name: 'Draper Building', image: 'https://wamu.org/wp-content/uploads/2019/11/berea-college-draper-hall-_wide-f802d4f534a8ae09836a187e48b10710fd905b2b.jpg' },
    { id: 2, name: 'Mac Building', image: 'https://stock.feinknopf.com/img-get/I0000qq9WoXeTQQA/s/750/750/10716-03.jpg' },
    { id: 3, name: 'Hutchins Library', image: 'https://i.ebayimg.com/images/g/tV0AAOSwSFJgoTy-/s-l1200.jpg' },
  ];

  const initialRooms = [
    { id: 1, name: 'Room 101', buildingId: 1, start: new Date(2023, 10, 1, 9, 0), end: new Date(2023, 10, 1, 17, 0) },
    { id: 2, name: 'Room 102', buildingId: 1, start: new Date(2023, 10, 2, 9, 0), end: new Date(2023, 10, 2, 17, 0) },
    { id: 3, name: 'Room 201', buildingId: 2, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
  ];

  const [buildings, setBuildings] = useState(initialBuildings);
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectBuilding = (building) => {
    setSelectedBuilding(building);
    setSelectedRoom(null);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

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
      alert(`Room ${selectedRoom.name} reserved from ${moment(selectedTime.start).format('LLL')} to ${moment(selectedTime.end).format('LLL')}`);
    } else {
      alert('Please select a room and time slot for reservation.');
    }
  };

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Harvard College</h2>
      {selectedBuilding ? (
        <>
          <BuildingSelector buildings={buildings} onSelectBuilding={() => setSelectedBuilding(null)} />
          <RoomSelector rooms={rooms.filter(room => room.buildingId === selectedBuilding.id)} onSelectRoom={handleSelectRoom} />
          {selectedRoom && (
            <div style={{ margin: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <Calendar
                localizer={localizer}
                events={[selectedRoom]}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                style={{ height: '400px' }}
              />
            </div>
          )}
          {selectedTime && (
            <div style={{ textAlign: 'center' }}>
              <p>Selected Time: {moment(selectedTime.start).format('LLL')} to {moment(selectedTime.end).format('LLL')}</p>
              <button onClick={handleReserve}>Reserve Room</button>
            </div>
          )}
        </>
      ) : (
        <BuildingSelector buildings={buildings} onSelectBuilding={handleSelectBuilding} />
      )}
    </div>
  );
};

export default HarvardCollege;
