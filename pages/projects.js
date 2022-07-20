import Head from 'next/head';

function projects() {
  return (
    <>
      <Head>
        <title>OUR PROJECTS</title>
        <meta name="description" content="AMOS ICT SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 className="text-center mt-4 py-3">OUR PROJECTS</h4>
      <div className="container">
        <div className="row mb-5 mt-3">
          <h5 className="text-center my-2 work-title">
            LIBRARY MANAGEMENT SYSTEM (LMS)
          </h5>
          <div className="col-md-8 mt-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Y5JLJFGZS0c?start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-4 mt-5">
            <p>
              LMS is modern web portal application for managing and maintaining
              learning resources e.g books
            </p>
            <p>
              You can issue and return books, register books, and register
              students
            </p>
            <p>You can generate reports</p>
          </div>
        </div>
        <div className="row mb-4 mt-4">
          <h5 className="text-center mt-3 mb-3 work-title">
            ICT ASSET MANAGEMENT SYSTEM (IAMS)
          </h5>
          <div className="col-md-8 mt-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l_wD9iVTu50?start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-4 mt-5">
            <p>
              IAMS is a enterprise ready web application for maintaining,
              managing and monitoring ICT assets
            </p>
            <p>
              IAMS solves manual process of ICT asset deployment, movement and
              inventory taking
            </p>
            <p>
              The system is inspired and is in line with Kenya vision 2030 and
              focus on emerging technologies for business enablement and falls
              under two categories; 1)Paperless office , 2)ICT cost optimization
              measures
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
