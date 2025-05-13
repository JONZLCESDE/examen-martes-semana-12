import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [idProducto, setIdProducto] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const actividadARuta = {
    'Cine': '1',
    'language tandem': '2',
    'Reunion empresarial': '3',
    'Campaña Politica': '4',
    'Cena Elegante': '5',
    'Stand up Comedy': '6',
  };

  const handleSubmitBuscar = (event) => {
    event.preventDefault();
    console.log('Intentando buscar actividad (coincidencia parcial):', idProducto);

    const actividadEncontrada = Object.keys(actividadARuta).find(
      (actividad) => actividad.toLowerCase().includes(idProducto.toLowerCase()) && idProducto.trim() !== ''
    );

    if (actividadEncontrada) {
      const idDestino = actividadARuta[actividadEncontrada];
      navigate(`/detalle/${idDestino}`);
    } else if (idProducto.trim() !== '') {
      alert(`No se encontraron actividades que coincidan con "${idProducto}".`);
    } else {
      alert('Por favor, ingresa el nombre o parte del nombre de la actividad.');
    }
  };

  const handleSubmitRegistro = (event) => {
    event.preventDefault();
    console.log('Intentando registrar usuario con:', { nombre, correo, contrasena });
    
    alert('Registro exitoso');
    
    navigate('/home');
  };

  return (
    <div className="register-container">
      <h2>Buscar Actividad</h2>
      <form onSubmit={handleSubmitBuscar}>
        <div className="form-group">
          <label htmlFor="idProducto">Nombre de Actividad:</label>
          <input
            type="text"
            id="idProducto"
            value={idProducto}
            onChange={(e) => setIdProducto(e.target.value)}
          />
        </div>
        <button type="submit">Buscar</button>
      </form>
      <p className="login-link">
        <button onClick={() => navigate('/buscar-cliente')}>Buscar cliente</button>
      </p>

      
      <h2 style={{ marginTop: '30px' }}>Registro de Usuario</h2>
      <form onSubmit={handleSubmitRegistro}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;