import Image from "next/image";
import Head from "next/head";

function services() {
  return (
    <>
      <Head>
        <title>OUR SERVICES</title>
        <meta name="description" content="AMOS ICT SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="services">
        <h4 className="text-center mt-4 py-3">OUR SERVICES</h4>
      </div>
      <div className="container my-2 pb-3">
        <div className="row py-3">
          <div className="col-md-4 offset-md-1">
            <h5 className="text-center py-2 mycard-title">
              Software/Web Design and Development
            </h5>
            <Image
              src="/images/software.jpg"
              className="card-Image-top mycard-Image"
              alt="services display"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <p className="card-text">
              Software/Web design and development services.
            </p>
          </div>

          <div className="col-md-4 offset-md-2">
            <h5 className="text-center py-2 mycard-title">CCTV installation</h5>
            <Image
              src="/images/cctv.jpg"
              className="card-Image-top mycard-Image"
              alt="services display"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <p className="card-text">
              CCTV installation, upgrading and maintenance .
            </p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-4 offset-md-1">
            <h5 className="text-center py-2 mycard-title">
              ICT Repair and Maintenace
            </h5>
            <Image
              src="/images/repair.jpg"
              className="card-Image-top mycard-Image"
              alt="Services displays"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <p className="card-text">
              Repairs, troubleshooting and maintenance of ICT assets.
            </p>
          </div>

          <div className="col-md-4 offset-md-2">
            <h5 className="text-center py-2 mycard-title">General Supplies</h5>
            <Image
              src="/images/supplies.jpg"
              className="card-Image-top mycard-Image"
              alt="Services Display"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <p className="card-text">Office stationery and general supplies.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
