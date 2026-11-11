import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><a href="/men">Men</a></li>
        <li className="navbar__item"><a href="/women">Women</a></li>
        <li className="navbar__item"><a href="/youth">Youth</a></li>
        <li className="navbar__item"><a href="/outdoor">Outdoor</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;