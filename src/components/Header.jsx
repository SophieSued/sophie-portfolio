export default function Header() {
    return (
      <header style={{ padding: 16, display: "flex", justifyContent: "center" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
    );
  }
  