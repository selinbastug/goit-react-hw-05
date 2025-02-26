import { Link } from "react-router";
import Theme from "./Theme";
import Search from "./Search";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container py-1">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link
          className="navbar-brand bg-primary px-2 py-1 text-black rounded"
          style={{ fontWeight: "800" }}
          to="/"
        >
          {`L'MDb`}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="d-flex w-100 align-items-center flex-column flex-lg-row">
            <div
              className="input-group flex-grow-1 me-3"
              style={{ maxWidth: "75%" }}
            >
              <Search />
            </div>
            <div>
              <Link
                className="btn btn-outline-primary border-2 py-1 px-3 rounded fw-bolder"
                to="/movies"
              >
                MOVIES
              </Link>
            </div>
            <div className="dropdown ms-3">
              <button
                className="btn btn-primary py-1 px-3 rounded fw-bolder dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                OPTIONS
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <Theme />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
