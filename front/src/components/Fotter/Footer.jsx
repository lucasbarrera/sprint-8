import "./footer.css";
import { githublogo } from "../../assets/github-logo.png";
function Footer() {
  return (
    <div className="footer-caja">
      <div>
        <img src={githublogo} alt="Repositorio de Goolstore" />
      </div>
      <div>
        <h2>Goool Store</h2>
      </div>
      <div>
        <img src={githublogo} alt="Repositorio del Dashboard" />
      </div>
    </div>
  );
}

export default Footer;
