import { useState, useRef, useEffect } from "react";
import HotelForm from "./assets/components/FormHotel";
import RoomForm from "./assets/components/RoomForm";
import HotelList from "./assets/components/HotelList";
import ReservationList from "./assets/components/ReservationList";
import ReservationForm from "./assets/components/ReservationForm";
import Login from "./assets/components/Login";
import "./assets/components/style/index.css";

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const containerRef = useRef(null);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegistrationForm(false);
  };
  
  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
    setShowLoginForm(false);
  };

  const closeForms = (e) => {
    if (!containerRef.current.contains(e.target)) {
      setShowLoginForm(false);
      setShowRegistrationForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeForms);
    return () => {
      document.removeEventListener("mousedown", closeForms);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={toggleLoginForm}>
              Log in
            </button>
          </li>
          <li>
            <button type="button" onClick={toggleRegistrationForm}>
              Register
            </button>
          </li>
          <li>
            <a href="#create-hotel-form">Create Hotel</a>
          </li>
          <li>
            <a href="#create-room-form">Create Room</a>
          </li>
          <li>
            <a href="#reservation-form">Make a Reservation</a>
          </li>
        </ul>
      </nav>
      {showLoginForm && <Login />}
      <section id="register-form">{/* Registrar usuario */}</section>
      <section id="create-hotel-form">
        
        <HotelForm />
      </section>
      <section id="create-room-form">
        <h2>Create Room</h2>
        <RoomForm />
      </section>
      <section id="hotel-list">
        <h2>List of Hotels</h2>
        <HotelList hotels={[]} onHotelSelect={setSelectedHotel} />
      </section>
      <section id="reservation-form">
        <h2>Make a Reservation</h2>
        <ReservationForm selectedHotel={selectedHotel} />
      </section>
      <section id="reservation-list">
        <h2>Reservations</h2>
        <ReservationList reservations={[]} />
      </section>
    </div>
  );
}

export default App;
