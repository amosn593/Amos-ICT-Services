import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function footer() {
  return (
    <FontAwesomeIcon icon={faSearch} style={{ fontSize: 100, color: "blue" }} />
  );
}

export default footer;
