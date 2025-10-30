export default function Projects() {
    return (
      <section id="proyectos" className="projects section">
        {/* Marquee superior */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>proyectos — proyectos — proyectos — proyectos — </span>
            <span>proyectos — proyectos — proyectos — proyectos — </span>
          </div>
        </div>
  
        {/* Grid de tarjetas */}
        <div className="projects__grid">
          {/* Card 1 */}
          <a className="project-card" href="#proyecto-1">
            <figure>
              <div className="project-card__thumb">{/* <img src="/teach.jpg" alt="Teach - House" /> */}</div>
              <figcaption className="project-card__caption"><strong>Teach - House</strong></figcaption>
            </figure>
          </a>
  
          {/* Card 2 */}
          <a className="project-card" href="#proyecto-2">
            <figure>
              <div className="project-card__thumb">{/* <img src="/malarIA.jpg" alt="MalarIA" /> */}</div>
              <figcaption className="project-card__caption"><strong>MalarIA</strong></figcaption>
            </figure>
          </a>
  
          {/* Card 3 */}
          <a className="project-card" href="#proyecto-3">
            <figure>
              <div className="project-card__thumb">{/* <img src="/etiketa.jpg" alt="Etiketa" /> */}</div>
              <figcaption className="project-card__caption"><strong>Etiketa</strong></figcaption>
            </figure>
          </a>
        </div>
      </section>
    );
  }
  