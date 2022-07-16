import Image from "next/image";

function whyus() {
  return (
    <div className="container">
      <h4 className="text-center py-2">Why Choose Us</h4>
      <hr className="my-2" />
      <div className="row my-2 py-2 choose-us">
        <div className="col-md-4 text-center">
          <Image
            src="/images/like.png"
            alt="customer satsfaction"
            loading="lazy"
            width={100}
            height={80}
          />
          <h5 className="py-3 choose-us-heading">Customer Satsfaction</h5>
          <p>We always ensure our customers are satsfied with our work.</p>
        </div>
        <div className="col-md-4 text-center">
          <Image
            src="/images/time.png"
            alt="customer satsfaction"
            loading="lazy"
            width={100}
            height={80}
          />
          <h5 className="py-3 choose-us-heading">Delivery on Time</h5>
          <p>We always deliver our products to our customers on time.</p>
        </div>
        <div className="col-md-4 text-center">
          <Image
            src="/images/quality.png"
            alt="customer satsfaction"
            loading="lazy"
            width={100}
            height={80}
          />
          <h5 className="py-3 choose-us-heading">Quality Service</h5>
          <p>We always offer quality products and services to our customers.</p>
        </div>
      </div>
    </div>
  );
}

export default whyus;
