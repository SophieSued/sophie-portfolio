export default function SobreMi() {
    return (
      <section id="sobre-mi" className="about section">
        {/* Carrusel/Marquee superior */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>sobre mi — sobre mi — sobre mi — sobre mi — sobre mi — </span>
            <span>sobre mi — sobre mi — sobre mi — sobre mi — sobre mi — </span>
          </div>
        </div>
  
        {/* Contenido principal */}
        <div className="about__grid">
          {/* Timeline */}
          <div className="timeline">
            <h2>Trayectoria</h2>
            <ul>
              <li>
                <div className="dot" />
                <div>
                  <strong>Actualidad</strong>
                  <div className="muted">Frontend / React</div>
                </div>
              </li>
              <li>
                <div className="dot" />
                <div>
                  <strong>ORT — TIC</strong>
                  <div className="muted">Estudios secundarios</div>
                </div>
              </li>
              <li>
                <div className="dot" />
                <div>
                  <strong>Estudios primarios</strong>
                  <div className="muted">Colegio primario</div>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Foto / placeholder */}
          <div className="about__photo">
            {/* Si querés una imagen real, reemplazá por:
            <img src="/mi-foto.jpg" alt="Sophie Sued" />
            y poné mi-foto.jpg en /public
            */}
          </div>
  
          {/* Cualidades */}
          <aside className="qualities">
            <h3>Cualidades</h3>
            <ul>
              <li>Orden y prolijidad</li>
              <li>Atención al detalle tipográfico</li>
              <li>Curiosidad y aprendizaje rápido</li>
              <li>Trabajo en equipo</li>
            </ul>
          </aside>
        </div>
      </section>
    );
  }
  