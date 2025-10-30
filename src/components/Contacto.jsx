export default function Contacto() {
    return (
      <section id="contacto" className="contact section">
        {/* Marquee superior */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>contacto — contacto — contacto — contacto — contacto — </span>
            <span>contacto — contacto — contacto — contacto — contacto — </span>
          </div>
        </div>
  
        {/* Grid principal */}
        <div className="contact__grid">
          {/* Columna izquierda */}
          <div className="contact__info">
            <h2>Redes</h2>
  
            <div className="contact__buttons">
              <a className="contact-btn" href="https://instagram.com/tuusuario" target="_blank">
                User <span className="icon">📷</span>
              </a>
  
              <a className="contact-btn" href="https://instagram.com/tuusuario2" target="_blank">
                User <span className="icon">📷</span>
              </a>
  
              <a className="contact-btn" href="mailto:tuemail@gmail.com">
                Mail <span className="icon">✉️</span>
              </a>
  
              <a className="contact-btn" href="tel:+5491123456789">
                Teléfono <span className="icon">📞</span>
              </a>
            </div>
          </div>
  
          {/* Columna derecha */}
          <div className="contact__photo">
            {/* Si tenés una imagen, agregala:
            <img src="/contacto.jpg" alt="Contacto" />
            */}
          </div>
        </div>
      </section>
    );
  }
  