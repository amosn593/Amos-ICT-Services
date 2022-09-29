import Image from "next/image";

function featured() {
  return (
    <div className="container mt-3">
      <h4 className=" text-center py-2">Our Clients</h4>
      <hr className="my-2" />
      <div className="row my-2 py-2">
        <div className="col-md-4 text-center my-2 py-2">
          <Image
            src="/images/kafosa.png"
            alt="Kafosa website website"
            loading="lazy"
            // layout="responsive"
            width={192}
            height={192}
          />
          <h6 className="py-3 text-center">
            Kenya Association of FOSAS(KAFOSA)
          </h6>
        </div>
        <div className="col-md-4 text-center my-2 py-2">
          <Image
            src="/images/akiki.jpg"
            alt="Kafosa website website"
            loading="lazy"
            // layout="responsive"
            width={192}
            height={192}
          />
          <h6 className="py-3 text-center">Akiki Interior and Decor</h6>
        </div>
        <div className="col-md-4 text-center my-2 py-2">
          <Image
            src="/images/rolproperties.jpeg"
            alt="Kafosa website website"
            loading="lazy"
            // layout="responsive"
            width={192}
            height={192}
          />
          <h6 className="py-3 text-center">Rol Properties</h6>
        </div>
      </div>
    </div>
  );
}

export default featured;
