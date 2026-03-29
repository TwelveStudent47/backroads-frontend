import "../index.css";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href} className="nav-link">
                            {link.value}
                        </a>
                    </li>
                )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a
                            href={link.href}
                            target="_blank"
                            className="nav-icon"
                        >
                            <i className={link.class}></i>
                        </a>
                    </li>
                );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
