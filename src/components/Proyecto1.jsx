export default function Proyecto1() {
    return (
      <section id="proyecto-1" className="project-detail section">
        <div className="project-detail__media">
          {/* Si tenés imagen real, reemplazá por:
          <img src="/teach-house.jpg" alt="Teach - House" />
          y poné teach-house.jpg en /public */}
        </div>
  
        <div className="project-detail__content">
          <h2>Teach - House</h2>
          <p>
            Breve descripción del proyecto: objetivo, problema que resuelve,
            tu aporte y tecnologías. Mantenerlo en 3–5 líneas.
          </p>
  
          <div className="project-detail__actions">
            <a className="btn" href="#" target="_blank" rel="noreferrer">Ver demo</a>
            <a className="btn btn--ghost" href="#" target="_blank" rel="noreferrer">Código</a>
          </div>
        </div>
      </section>
    );
  }
  