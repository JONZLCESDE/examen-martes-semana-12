
import { Link, useParams } from 'react-router-dom';
import './Detalle.css';

function Detalle() {
  const { id } = useParams();

  const detalle = {
    '1': { imagenUrl: '/images/cine.png', descripcion: 'Este no es cualquier cine, este es el unico y primer cine en el mundo que tiene una pantalla de 100 metros de largo y 50 de ancho, con un sonido envolvente que te hara sentir como si estuvieras dentro de la pelicula,pero lo q hace tan especial esta sala de cine es que no es \u00a0el tipico teatro o sala convencional,esta sala de cine esta hecha en una antigua iglesia, con una arquitectura impresionante' },
    '2': { imagenUrl: '/images/language.png', descripcion: '¿Estás aburrido? ¿Quieres conocer gente nueva? te invitamos a nuestro language tandem, es un encuentro donde personas de diferentes países y culturas se reúnen para conversar y ayudarse mutuamente a practicar distintos idiomas. No importa si hablas inglés, español, francés o cualquier otro, ¡todos son bienvenidos! ' },
    '3': { imagenUrl: '/images/empresa.jpg', descripcion: 'Te invitamos a una reunion empresarial donde hablaremos con inversionistas y los entrevistaremos para elegir una de sus acciones y convertirlo en socio de \u00a0nuestra empresa' },
    '4': { imagenUrl: '/images/politica.jpg', descripcion: 'Una campaña política es el proceso mediante el cual líderes y partidos intentan conectar con los ciudadanos para presentar sus ideas, promesas y planes para el futuro del país, del estado o de la comunidad, estas campañas son una parte fundamental de la democracia: es el momento en que los votantes pueden escuchar directamente qué propone cada candidato, comparar opciones y tomar una decisión informada.' },
    '5': {
      imagenUrl: '/images/cena.jpg', descripcion: `El Rey de Inglaterra tiene el honor de invitar a Su Excelencia
y a distinguidos miembros de la alta sociedad
a una velada exclusiva en celebración del compromiso con la diplomacia, el progreso y la unidad entre naciones.

La recepción tendrá lugar en los salones reales del Palacio de Buckingham
el día sábado, a las siete en punto de la tarde.

Será una ocasión de conversación, arte y encuentro, donde la tradición se une con la visión de futuro.
Etiqueta: traje formal / vestido de gala.` },
    '6': {
      imagenUrl: '/images/image.jpg', descripcion: `¿Quieres salir de la rutina y reírte un rato?
Entonces el stand-up comedy es para ti. Es un show en el que un comediante se sube al escenario con un micrófono y, con mucho humor, nos cuenta anécdotas, chistes y situaciones con las que todos podemos sentirnos identificados.
Sin disfraces ni personajes, solo una persona compartiendo su forma de ver el mundo, con ironía, sinceridad y muchas ganas de hacerte pasar un buen rato.
Es como escuchar a ese amigo gracioso que siempre tiene algo que decir.` },
  };

  const infoDetalle = detalle[id] || { imagenUrl: 'https://via.placeholder.com/150', descripcion: 'Descripción no encontrada.' };

  return (
    <div className="detalle-container">
      <h2>Detalle del Elemento {id}</h2>
      <div className="detalle-content">
        <div className="imagen-container">
          <img src={infoDetalle.imagenUrl} alt={`Imagen del elemento ${id}`} />
        </div>
        <div className="descripcion-container">
          <p>{infoDetalle.descripcion}</p>
        </div>
        <div className="buttons-container"> 
          <Link to="/listado" className="listado-button">
            Listado Elementos
          </Link>
          <Link to={`/dos-imagenes/${id}`} className="dos-imagenes-button">
            ¿quieres saber mas? click aqui
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detalle;