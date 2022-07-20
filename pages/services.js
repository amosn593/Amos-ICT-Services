import Image from 'next/image';
import Head from 'next/head';

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
      <div className="container my-2">
        <div className="row py-3">
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">
              Software Development Services
            </h5>
            <div className="card my-card">
              <Image
                src="/images/software.jpg"
                className="card-Image-top mycard-Image"
                alt="services display"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  We develop Software products; Websites, Mobile Apps, Desktop
                  apps for businesses, institutions and individuals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">
              Cloud Computing services
            </h5>
            <div className="card my-card">
              <Image
                src="/images/cloud.png"
                className="card-Image-top mycard-Image"
                alt="services display"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  We offer cloud computing consultation services, majoring on
                  Microsoft Azure, Microsoft 365 and Microsoft Dynamics 365.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">CCTV services</h5>
            <div className="card my-card">
              <Image
                src="/images/cctv.jpg"
                className="card-Image-top mycard-Image"
                alt="services display"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  CCTV installation, upgrading and maintenance for business
                  premises, homes, schools e.t.c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">
              ICT Repair Services
            </h5>
            <div className="card my-card">
              <Image
                src="/images/repair.jpg"
                className="card-Image-top mycard-Image"
                alt="Services displays"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  We do Repairs, troubleshooting and maintenance of ICT assets
                  e.g Printers, Laptops, Desktop computers e.t.c.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">
              Tutoring and Trainings
            </h5>
            <div className="card my-card">
              <Image
                src="/images/tutor.png"
                className="card-Image-top mycard-Image"
                alt="services display"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  We do tutoring and trainings on software development, computer
                  packages, and IT services in general.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-center py-2 mycard-title">
              Office Stationery Supplies
            </h5>
            <div className="card my-card">
              <Image
                src="/images/supplies.jpg"
                className="card-Image-top mycard-Image"
                alt="Services Display"
                loading="lazy"
                layout="responsive"
                width={80}
                height={60}
              />
              <div className="card-body">
                <p className="card-text">
                  We do office stationery supplies including toners, printing
                  papers, laptops, printers, pens, notebooks among others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
