import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Projects from "./components/Projects";
import Proyecto1 from "./components/Proyecto1";
import Proyecto2 from "./components/Proyecto2";
import Proyecto3 from "./components/Proyecto3";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      {

      }
      <Header />

      {

      }
      <section id="inicio" className="section section--full">
        <div className="container">
          <Hero />
        </div>
      </section>

      {

      }
      <section id="sobre-mi" className="section section--compact">
        <div className="container">
          <SobreMi />
        </div>
      </section>

      {

      }
      <section id="proyectos" className="section section--compact">
        <div className="container">
          <Projects />
        </div>
      </section>

      {

      }
      <section id="proyecto1" className="section section--compact">
        <div className="container">
          <Proyecto1 />
        </div>
      </section>

      <section id="proyecto2" className="section section--compact">
        <div className="container">
          <Proyecto2 />
        </div>
      </section>

      <section id="proyecto3" className="section section--compact">
        <div className="container">
          <Proyecto3 />
        </div>
      </section>

      {
        
      }
      <section id="contacto" className="section section--compact">
        <div className="container">
          <Contacto />
        </div>
      </section>
    </>
  );
}
