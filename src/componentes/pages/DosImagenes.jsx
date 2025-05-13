import { Link, useParams } from 'react-router-dom';
import './DosImagenes.css';

function DosImagenes() {
  const { id } = useParams();
  const imagenesPorId = {
    '5': { img1: '/images/cena.jpg', img2: '/images/rey.jpg' },
    '6': { img1: '/images/image.jpg', img2: '/images/empresa.jpg' },
  };
  const imagenes = imagenesPorId[id] || { img1: '/images/image.jpg', img2: '/images/cena.jpg' };

  return (
    <div className="dos-imagenes-container">
      <h2>Dos Imágenes para el ID: {id}</h2>
      <div className="imagenes-container">
        <div className="imagen-placeholder">
          <img src={imagenes.img1} alt={`Imagen 1 del ID ${id}`} />
        </div>
        <div className="imagen-placeholder">
          <img src={imagenes.img2} alt={`Imagen 2 del ID ${id}`} />
        </div>
      </div>
      <Link to="/listado" className="listado-button">
        Volver al Listado
      </Link>
    </div>
  );
}

export default DosImagenes;