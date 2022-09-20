import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/navigation.module.scss";

function Navigation() {
  const router = useRouter();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light "
      id={styles.navigation}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <Link className="nav-item" href="/">
              <a
                className={
                  router.pathname == "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </Link>
            <Link className="nav-item" href="/services">
              <a
                className={
                  router.pathname == "/services"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Services
              </a>
            </Link>
            <Link className="nav-item" href="/projects">
              <a
                className={
                  router.pathname == "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </a>
            </Link>
            <Link className="nav-item" href="/contactus">
              <a
                className={
                  router.pathname == "/contactus"
                    ? "nav-link active"
                    : "nav-link"
                }
                tabIndex="-1"
              >
                Contact Us
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
