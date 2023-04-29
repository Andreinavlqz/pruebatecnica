import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Reservation.css";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    hotelName: "",
    roomNumber: "",
    checkinDate: "",
    checkoutDate: "",
    guests: "",
  });

  useEffect(() => {
    axios.get("/api/reservations").then((response) => {
      setReservations(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/reservations", formData).then((response) => {
      setReservations([...reservations, response.data]);
      setFormData({
        hotelName: "",
        roomNumber: "",
        checkinDate: "",
        checkoutDate: "",
        guests: "",
      });
    });
  };

  return (
    <div className="reservation-list-container">
      <h1>Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Room Number</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Guests</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.hotelName}</td>
              <td>{reservation.roomNumber}</td>
              <td>{reservation.checkinDate}</td>
              <td>{reservation.checkoutDate}</td>
              <td>{reservation.guests}</td>
              <td>
                <Link to={`/reservations/${reservation.id}`}>View</Link>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <h2>Add Reservation</h2>
        <label>
          Hotel Name:
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Room Number:
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Check-in Date:
          <input
            type="date"
            name="checkinDate"
            value={formData.checkinDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Check-out Date:
          <input
            type="date"
            name="checkoutDate"
            value={formData.checkoutDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default ReservationList;
