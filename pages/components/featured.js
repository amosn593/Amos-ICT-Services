import Image from "next/image";

function featured() {
  return (
    <div className="container mt-3">
      <h4 className=" text-center py-2">
        Featured Software Development Projects
      </h4>
      <hr className="my-2" />
      <div className="row my-2 py-2">
        <div className="col-md-3 my-2 py-2">
          <div className="card">
            <div className="card-header d-flex justify-content-around">
              <h6 className="card-text card-desc">KAFOSA Website</h6>
            </div>
            <Image
              className="card-img-top card-image"
              src="/images/kafosa.png"
              alt="Kafosa website website"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <div className="card-body">
              <p className="card-text">Website</p>
              <a
                href="https://kafosa.or.ke/"
                className="stretched1-link"
                target="_blank "
              >
                <button type="button" className="btn btn-secondary">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-2 py-2">
          <div className="card">
            <div className="card-header d-flex justify-content-around">
              <h6 className="card-text card-desc">Akiki Interior and Decor</h6>
            </div>
            <Image
              className="card-img-top card-image"
              src="/images/akiki.jpg"
              alt="Akiki Interior and Decor"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <div className="card-body">
              <p className="card-text">website.</p>
              <a
                href="https://akikiinterior.herokuapp.com/"
                className="stretched1-link"
                target="_blank "
              >
                <button type="button" className="btn btn-secondary">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-2 py-2">
          <div className="card">
            <div className="card-header d-flex justify-content-around">
              <h6 className="card-text card-desc">E-kuku website</h6>
            </div>
            <Image
              className="card-img-top card-image"
              src="/images/ekuku.png"
              alt="E-kuku website"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <div className="card-body">
              <p className="card-text">e-commerce.</p>
              <a
                href="https://e-kuku.co.ke/"
                className="stretched1-link"
                target="_blank "
              >
                <button type="button" className="btn btn-secondary">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-2 py-2">
          <div className="card">
            <div className="card-header d-flex justify-content-around">
              <h6 className="card-text card-desc">Rol Properties Website</h6>
            </div>
            <Image
              className="card-img-top card-image"
              src="/images/rolproperties.jpeg"
              alt="Rol Properties Website"
              loading="lazy"
              layout="responsive"
              width={80}
              height={60}
            />
            <div className="card-body">
              <p className="card-text">Website.</p>
              <a
                href="https://rolproperties.com/"
                className="stretched1-link"
                target="_blank "
              >
                <button type="button" className="btn btn-secondary">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featured;
