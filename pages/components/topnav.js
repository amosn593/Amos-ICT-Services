import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import {
  faPhone,
  faMailBulk,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function topnav() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3 text-center">
          <Image
            alt="my logo"
            className="ml-3"
            src="/images/menulogo.png"
            width={100}
            height={80}
          />
        </div>
        <div className="col-md-5 text-center">
          <h2 className="text-center mt-3">AMOS ICT SERVICES</h2>
        </div>
        <div className="col-md-4 d-flex">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="text-center d-flex mt-4 mx-1">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: 20 }}
                  className=""
                />
                <p className="mx-1">070224078</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="text-center d-flex mt-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: 20 }}
                  className=""
                />
                <p className="mx-1 px-1">amosndonga@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topnav;
