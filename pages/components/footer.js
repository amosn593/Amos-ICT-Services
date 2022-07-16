import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faGithub,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  // <FontAwesomeIcon icon={faSearch} style={{ fontSize: 20, color: "blue" }} />
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h6 className="py-3">Social Links</h6>
            <a
              className="social-links"
              href="https://github.com/amosn593 "
              target="_blank "
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 30 }}
                className="faicon github"
              />
            </a>
            <a
              className="social-links"
              href="https://www.facebook.com/ndongaamos "
              target="_blank "
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 30 }}
                className="faicon facebook"
              />
            </a>
            <a
              className="social-links"
              href="https://twitter.com/amosn593 "
              target="_blank "
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: 30 }}
                className="faicon twitter"
              />
            </a>
            <a
              className="social-links"
              href="https://www.youtube.com/channel/UCoLUbL1GkxaCq0xIAkTtjEw"
              target="_blank "
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: 30 }}
                className="faicon youtube"
              />
            </a>
          </div>
          <div className="col-md-4 text-center">
            <h6 className="py-3">AMOS ICT SERVICES</h6>
            <p>&copy; 2022</p>
            <p>All Rights Reserved</p>
          </div>
          <div className="col-md-4 text-center">
            <h6 className="py-3">Our Contacts</h6>
            <p>Texas Building</p>
            <p>Links Road, Nyali</p>
            <p>0702240787</p>
            <p>amosndonga@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
