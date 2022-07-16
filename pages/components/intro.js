import Image from "next/image";

function intro() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-6 text-center">
          <h2 className="my-4">YOUR ICT SERVICES HUB</h2>
          <div className="container">
            <Image
              src="/images/intro-img.jpg"
              alt="intro logo"
              layout="responsive"
              width={250}
              height={160}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="mt-4">Expert in</h3>
          <ul>
            <li className="my-2 py-2">
              Software Development, Maintenance and Upgrading.
            </li>
            <li className="my-2 py-2">
              ICT Assets Troubleshooting, Diagnoses and Repairs(Desktops,
              Laptops, Printers e.t.c).
            </li>
            <li className="my-2 py-2">
              CCTV Installation, Maintenance and Upgrading.
            </li>
            <li className="my-2 py-2">
              Project Planning, Management, Monitoring, Evaluation and Process
              Automation.
            </li>
            <li className="my-2 py-2">
              Cloud Computing( Microsoft Azure and Microsoft 365).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default intro;
