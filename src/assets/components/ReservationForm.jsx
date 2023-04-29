import { useState } from 'react';
import './style/Reservation.css'

function ReservationForm() {
  const [guestData, setGuestData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    documentType: '',
    documentNumber: '',
    email: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGuestData({ ...guestData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la información a un servidor para procesar la reserva
    console.log(guestData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={guestData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={guestData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Birth Date:
        <input
          type="date"
          name="birthDate"
          value={guestData.birthDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={guestData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Document Type:
        <select
          name="documentType"
          value={guestData.documentType}
          onChange={handleInputChange}
        >
          <option value="">Select an option</option>
          <option value="passport">Passport</option>
          <option value="id">ID Card</option>
        </select>
      </label>
      <label>
        Document Number:
        <input
          type="text"
          name="documentNumber"
          value={guestData.documentNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={guestData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={guestData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Emergency Contact Name:
        <input
          type="text"
          name="emergencyContactName"
          value={guestData.emergencyContactName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Emergency Contact Phone:
        <input
          type="tel"
          name="emergencyContactPhone"
          value={guestData.emergencyContactPhone}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default ReservationForm