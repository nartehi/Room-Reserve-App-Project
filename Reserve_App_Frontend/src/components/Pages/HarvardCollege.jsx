import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BuildingSelector = ({ buildings, onSelectBuilding }) => {
  return (
    <div>
      <h3>Select a Building:</h3>
      <div style={{ display: 'flex', gap: '20px',  justifyContent: 'center' }}>
        {buildings.map(building => (
          <div key={building.id} style={{ cursor: 'pointer' }} onClick={() => onSelectBuilding(building)}>
            <img
              src={building.image}
              alt={building.name}
              style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
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
        <h2>Select a Room:</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {rooms.map(room => (
            <div key={room.id} style={{ cursor: 'pointer', textAlign: 'center', flexBasis: '22%', marginBottom: '20px' }}>
              <button onClick={() => onSelectRoom(room)}>{room.name}</button>
            </div>
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
    { id: 3, name: 'Room 103', buildingId: 1, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
    { id: 4, name: 'Room 104', buildingId: 1, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
    { id: 1, name: 'Room 201', buildingId: 1, start: new Date(2023, 10, 1, 9, 0), end: new Date(2023, 10, 1, 17, 0) },
    { id: 2, name: 'Room 202', buildingId: 1, start: new Date(2023, 10, 2, 9, 0), end: new Date(2023, 10, 2, 17, 0) },
    { id: 3, name: 'Room 203', buildingId: 1, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
    { id: 4, name: 'Room 204', buildingId: 1, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 5, name: 'Room 101', buildingId: 2, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
    { id: 6, name: 'Room 102', buildingId: 2, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0) },
    { id: 7, name: 'Room 103', buildingId: 2, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 8, name: 'Room 104', buildingId: 2, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 9, name: 'Room 101', buildingId: 3, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 10, name:'Room 102', buildingId: 3, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 11, name:'Room 103', buildingId: 3, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
    { id: 12, name:'Room 104', buildingId: 3, start: new Date(2023, 10, 3, 9, 0), end: new Date(2023, 10, 3, 17, 0)},
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
      alert(`${selectedRoom.name} reserved from ${moment(selectedTime.start).format('LLL')} to ${moment(selectedTime.end).format('LLL')}`);
    } else {
      alert('Please select a room and time slot for reservation.');
    }
  };

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Berea College</h1>
      {selectedBuilding ? (
        <>
          <BuildingSelector buildings={buildings} onSelectBuilding={() => setSelectedBuilding(null)} />
          <RoomSelector rooms={rooms.filter(room => room.buildingId === selectedBuilding.id)} onSelectRoom={handleSelectRoom} />
          {selectedRoom && (
            <div className="" style={{ margin: '20px', border: '2px solid teal', borderRadius: '8px', overflow: 'hidden' }}>
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
