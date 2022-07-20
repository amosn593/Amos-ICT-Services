import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import {
  faPhone, faMailBulk
} from '@fortawesome/free-solid-svg-icons';

function topnav() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3">
          <Image
            alt="my logo"
            className="ml-3"
            src="/images/menulogo.png"
            width={100}
            height={80}
          />
        </div>
        <div className="col-md-5">
          <h2 className="text-start mt-3">AMOS ICT SERVICES</h2>
        </div>
        <div className="col-md-4 d-flex">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex mt-4 mx-1">
                {/* <Image
                  alt="my phone number"
                  src="/images/phone.png"
                  loading="eager"
                  width={24}
                  height={20}
                /> */}
                <p className="mx-1">070224078</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex mt-4">
                {/* <Image
                  alt="my email"
                  src="/images/email.png"
                  width={10}
                  height={10}
                /> */}
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
