import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faList } from "@fortawesome/free-solid-svg-icons";

function intro() {
  return (
    <div
      className="container-fluid pb-4 py-5"
      style={{ ["backgroundColor"]: "#EBDEC0" }}
    >
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="container mt-3">
            <Image
              src="/images/intro-img.jpg"
              className="intro-image"
              alt="intro logo"
              layout="responsive"
              width={250}
              height={160}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="mt-4">YOUR ICT SERVICES HUB</h4>
          <ol>
            <li className="my-2 py-2">
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 20, paddingRight: 10, color: "#CB3243" }}
              />
              Software/Web Design, Development and Maintenance.
            </li>
            <li className="my-2 py-2">
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 20, paddingRight: 10, color: "#CB3243" }}
              />
              ICT Repairs and Maintenance.
            </li>
            <li className="my-2 py-2">
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 20, paddingRight: 10, color: "#CB3243" }}
              />
              CCTV Installation, Maintenance and Upgrading.
            </li>

            <li className="my-2 py-2">
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 20, paddingRight: 10, color: "#CB3243" }}
              />
              General Supplies.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default intro;
