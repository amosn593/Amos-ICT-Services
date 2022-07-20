import Head from 'next/head';

function contactus() {
  return (
    <>
      <Head>
        <title>CONTACT US</title>
        <meta name="description" content="AMOS ICT SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 className="text-center mt-4 py-3">CONTACT US</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-center heading">Our Address</h5>
            <p className="text-center">
              Texas Building Links Road, Nyali Mombasa
            </p>
            <p className="text-center">+254702240787</p>
            <p className="text-center">+254776464012</p>
            <p className="text-center mb-2">info@amosndonga.com</p>
            <p className="text-center mb-2">amosndonga@gamil.com</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-center heading">Contact Us Form</h5>
            <form className="w-100">
              <div className="row mb-3">
                <label htmlFor="fullname" className="col-sm-4 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="phonenumber"
                  className="col-sm-4 col-form-label"
                >
                  Phone Number
                </label>
                <div className="col-sm-8">
                  <input
                    type="phone"
                    className="form-control"
                    id="phonenumber"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-4 col-form-label">
                  Email Address
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="msg" className="col-sm-4 col-form-label">
                  Message:
                </label>
                <div className="col-sm-8">
                  <textarea
                    name="msg"
                    id="msg"
                    cols="30"
                    rows="5"
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row text-center">
                <button
                  type="submit"
                  className="btn btn-outline-danger  my-3 p-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default contactus;
