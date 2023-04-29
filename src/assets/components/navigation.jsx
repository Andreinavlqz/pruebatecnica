import { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import HotelForm from "./FormHotel";
import RoomForm from "./RoomForm";
import ReservationForm from "./ReservationForm";
import './style/navigation.css'

function Navigation() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showRoomForm, setShowRoomForm] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
  };

  const handleHotelClick = () => {
    setShowHotelForm(true);
  };

  const handleRoomClick = () => {
    setShowRoomForm(true);
  };

  const handleReservationClick = () => {
    setShowReservationForm(true);
  };

  return (
    <div>
      <div className="navigation">
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegistrationClick}>Register</button>
        <button onClick={handleHotelClick}>Create Hotel</button>
        <button onClick={handleRoomClick}>Create Room</button>
        <button onClick={handleReservationClick}>Make Reservation</button>
      </div>

      {showLoginForm && <LoginForm />}
      {showRegistrationForm && <RegistrationForm />}
      {showHotelForm && <HotelForm />}
      {showRoomForm && <RoomForm />}
      {showReservationForm && <ReservationForm />}
    </div>
  );
}

export default Navigation;
