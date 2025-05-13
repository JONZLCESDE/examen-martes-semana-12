import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const nombreUsuario = "Amig@";

  
  const urlServicioChat = 'https://tu-servicio-de-chat.com/widget';

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2>¡Bienvenido/a, {nombreUsuario}!</h2>
        <p>Descubre todo lo que nuestra comunidad tiene para ofrecer.</p>
      </section>

      <section className="recent-activities-section">
        <h3>Actividades Recientes en la Comunidad</h3>
        <ul>
          <li><Link to="/detalle/1">Nuevo debate sobre [CINE]</Link></li>
          <li>Se ha publicado una  nueva pelicula y queremos saber q te parecio</li>
          <li>(ANONYMUSXX) ha compartido una nueva experiencia en [Actividades]</li>
          <li>(SANDRITAPEREEZ) ha compartido una nueva experiencia en [Actividades]</li>
          <li>(TU) tambien puedes compartirnos tu experiencia en [Actividades]</li>

            <li><Link to="/detalle/2">Tenemos novedades en [language]</Link></li>
        </ul><li>(ANONYMUSXX) ha aprendido un nuevo idioma en [Actividades]</li>
          <li>(SANDRITAPEREEZ) le a enseñado a apu español basico [Actividades]</li>
          <li>(JUANDARKS) a mantenido una conversacion con rodriginho [Actividades]</li>


      </section>

      <section className="featured-discussions-section">
        <h3>Foros o Discusiones Destacadas</h3>
        <ul>
          <li><Link to="/foro/1">¿Qué opinas sobre ()?</Link></li>
          
          <li>Preguntas frecuentes sobre (Servicio)</li>

        </ul>


      </section>

      <section className="upcoming-events-section">
        <h3>Eventos Próximos</h3>
        <ul>
          <li>Una pelicula al aire libre: [Insurgente] - [22/12/2025]</li>

          <li>Encuentro comunitario: [parque bolivar] - [El sabado a las 11 am]</li>
          <li>Campaña de emprendimiento y reclutacion de inversionistas: [Oficina central] - [Mañana a partir de las 7 am]</li>

        </ul>
        <p><Link to="/eventos">Ver todos los eventos</Link></p>
      </section>

      <section className="benefits-section">
        <h3>Beneficios</h3>
        <ul>
          <li><Link to="/actividades-exclusivas">Actividades exclusivas para miembros</Link></li>
          <li><Link to="/talleres-webinars">Meetings</Link></li>
          <li><Link to="/recursos">Recursos descargables</Link></li>
        </ul>
      </section>

      <section className="contact-section">
        <h3>Contacto</h3>
        <form className="suggestion-form">
          <h4>Formulario para sugerencias o ayuda</h4>
          <textarea placeholder="Escribe aquí tu sugerencia o consulta"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <p>¿Necesitas ayuda inmediata? <a href={urlServicioChat} target="_blank" rel="noopener noreferrer">Chatea con un administrador</a></p>
      </section>

      <section className="about-us-section">
        <h3>Acerca de</h3>
        <p><Link to="/historia">Historia de la comunidad</Link></p>
        <p><Link to="/objetivo-valores">Nuestro objetivo y valores</Link></p>
        <p><Link to="/equipo">Equipo organizador</Link></p>
      </section>
    </div>
  );
}

export default Home;