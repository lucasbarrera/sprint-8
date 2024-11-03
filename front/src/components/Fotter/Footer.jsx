import "./footer.css";
import githublogo from "../../assets/github-logo.png";
function Footer() {
  return (
    <div className="footer-caja">
      <div>
        <h6>Gooolstore</h6>
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
        </a>
      </div>
      <div>
        <h2>Goool Store</h2>
      </div>
      <div>
        <h6>Dashboard</h6>
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
      </div>
    </div>
  );
}

export default Footer;
