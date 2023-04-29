import { useState } from 'react';
import './style/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Lógica para validar las credenciales ingresadas por el usuario y redirigirlo a la página principal de la plataforma de viajes
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();

    // Lógica para enviar el formulario de registro al servidor
  };

  const toggleRegistrationForm = () => {
   
    setShowRegistrationForm((prevState) => !prevState);
  };

  return (
    <div className="login">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="registration">
        <button onClick={toggleRegistrationForm}>Registrarse</button>
        {showRegistrationForm && (
          <form onSubmit={handleRegistrationSubmit}>
            <label>
              Nombre:
              <input type="text" required />
            </label>
            <label>
              Apellido:
              <input type="text" required />
            </label>
            <label>
              Correo electrónico:
              <input type="email" required />
            </label>
            <label>
              Contraseña:
              <input type="password" required />
            </label>
            <button onClick={toggleRegistrationForm}>Registrarse</button>

            <button type="button" onClick={toggleRegistrationForm}>Cancelar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
