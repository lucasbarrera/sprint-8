import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./src/assets/logo_sin_fondo.png" alt="logo del ecomerce" />
        <div className="titulo">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
