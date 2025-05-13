
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Intentando buscar usuario con correo:', correo, 'y contraseña:', contrasena);
    if (correo && contrasena) {
      navigate('/listado');
    } else {
      alert('Por favor, ingresa el correo y la contraseña del usuario.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Buscar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correo">Correo:</label>
            <input
              type="text"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div className="secondary-options-wrapper"> 
        <button onClick={() => navigate('/buscar-producto')}>Unirse a la Actividad</button>
        <button onClick={() => navigate('/registro')}>Registrar Usuario</button>
      </div>
    </div>
  );
}

export default Login;

