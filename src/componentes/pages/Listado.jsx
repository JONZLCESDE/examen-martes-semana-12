import { Link } from 'react-router-dom';
import './Listado.css';

function Listado() {
  


  const itemsConImagen = [
    { id: 1, nombre: 'Cine', imagen: '/images/cine.png' },
    { id: 2, nombre: 'language tandem', imagen: '/images/language.png' },
    { id: 3, nombre: 'Reunion empresarial', imagen: '/images/empresa.jpg' },
    { id: 4, nombre: 'Campaña Politica', imagen: '/images/politica.jpg' },
    { id: 5, nombre: 'Cena Elegante', imagen: '/images/cena.jpg' },
    { id: 6, nombre: 'Stand up Comedy', imagen: '/images/image.jpg' },
  ];

  return (
    <div className="listado-container">
      <h2>Listado de Elementos</h2>
      <div className="grid-container">
        {itemsConImagen.map(item => (
          <div key={item.id} className="grid-item">
            <img src={item.imagen} alt={item.nombre} className="item-imagen" />
            <p>{item.nombre}</p>
            <Link to={`/detalle/${item.id}`} className="ver-button">
              Ver
            </Link>
          </div>
        ))}
      </div>
      <Link to="/home" className="home-button">
        Home
      </Link>
    </div>
  );
}

export default Listado;




