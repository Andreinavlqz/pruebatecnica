import { useState } from "react";

function RoomForm({ onSubmit }) {
  const [roomData, setRoomData] = useState({
    roomType: "",
    roomLocation: "",
    baseCost: 0,
    taxes: 0
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(roomData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoomData({ ...roomData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Room Type:
        <input
          type="text"
          name="roomType"
          value={roomData.roomType}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Room Location:
        <input
          type="text"
          name="roomLocation"
          value={roomData.roomLocation}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Base Cost:
        <input
          type="number"
          name="baseCost"
          value={roomData.baseCost}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Taxes:
        <input
          type="number"
          name="taxes"
          value={roomData.taxes}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RoomForm;
