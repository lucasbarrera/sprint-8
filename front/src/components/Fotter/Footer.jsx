import "./footer.css";
import githublogo from "../../assets/github-logo.png";
function Footer() {
  return (
    <div className="footer-caja">
      <div>
        <a
          href="https://github.com/MarcosFlores178/grupo_9_ProyectoWebDH"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img
            className="github-logo"
            src={githublogo}
            alt="Repositorio de Goolstore"
            />
        </a><br />
        <h4>Gooolstore</h4>
      </div>
      <div className="logo">
        <img src="./src/assets/logo_sin_fondo.png" alt="logo del ecomerce" />
        <div>
          <h2>GOOOLSTORE</h2>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/lucasbarrera/sprint-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github-logo"
            src={githublogo}
            alt="Repositorio del Dashboard"
            />
        </a>
        <h4>Dashboard</h4>
      </div>
    </div>
  );
}

export default Footer;
