import { useState } from 'react';
import './style/HotelForm.css'
const HotelForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rooms, setRooms] = useState([]); // nuevo estado para almacenar las habitaciones del hotel
  const [isEnabled, setIsEnabled] = useState(true); // nuevo estado para habilitar/deshabilitar el hotel

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica para enviar la información del nuevo hotel al servidor
    const newHotel = {
      name,
      address,
      phoneNumber,
      rooms,
      isEnabled,
    };

    console.log(newHotel); // imprime el objeto que representa el nuevo hotel

    // resetear los estados del formulario después de enviar la información
    setName('');
    setAddress('');
    setPhoneNumber('');
    setRooms([]);
    setIsEnabled(true);
  };

  const handleAddRoom = () => {
    // agregar una habitación al estado de habitaciones del hotel
    const newRoom = {
      name: '',
      price: 0,
      isEnabled: true,
    };

    setRooms([...rooms, newRoom]);
  };

  const handleRoomChange = (index, field, value) => {
    // modificar un campo específico de una habitación en el estado de habitaciones del hotel
    const updatedRooms = [...rooms];
    updatedRooms[index][field] = value;

    setRooms(updatedRooms);
  };

  return (
    <div className="container">
      <h1>Crear nuevo hotel</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del hotel:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Dirección:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Número de teléfono:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <button type="button" onClick={handleAddRoom}>Agregar habitación</button>
        {rooms.map((room, index) => (
  <div key={index}>
    <input type="text" placeholder="Nombre de la habitación" value={room.name} onChange={(e) => handleRoomChange(index, 'name', e.target.value)} required />
    <input type="number" placeholder="Precio por noche" value={room.price} onChange={(e) => handleRoomChange(index, 'price', parseFloat(e.target.value))} required />
    <label>
      Habilitar/deshabilitar:
      <input type="checkbox" checked={room.isEnabled} onChange={(e) => handleRoomChange(index, 'isEnabled', e.target.checked)} />
    </label>
  </div>
))}

        <label>
          Habilitar/deshabilitar hotel:
          <input type="checkbox" checked={isEnabled} onChange={(e) => setIsEnabled(e.target.checked)} />
        </label>
        <button type="submit">Crear hotel</button>
      </form>
    </div>
  );
};

export default HotelForm;
