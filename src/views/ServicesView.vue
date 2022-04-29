<template>
  <div class="services">
    <h4 class="text-center mt-4 py-3">Our Services</h4>
  </div>
  <div class="container">
    <div class="row py-3">
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">
          Software Development Services
        </h5>
        <div class="card my-card">
          <img
            src="../assets/software.jpg"
            class="card-img-top mycard-img"
            alt="services display"
          />
          <div class="card-body">
            <p class="card-text">
              We develop Software products; Websites, Mobile Apps, Desktop apps
              for businesses, institutions and individuals.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">Cloud Computing services</h5>
        <div class="card my-card">
          <img
            src="../assets/cloud.png"
            class="card-img-top mycard-img"
            alt="services display"
          />
          <div class="card-body">
            <p class="card-text">
              We offer cloud computing consultation services, majoring on
              Microsoft Azure, Microsoft 365 and Microsoft Dynamics 365.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">CCTV services</h5>
        <div class="card my-card">
          <img
            src="../assets/cctv.jpg"
            class="card-img-top mycard-img"
            alt="services display"
          />
          <div class="card-body">
            <p class="card-text">
              CCTV installation, upgrading and maintenance for business
              premises, homes, schools e.t.c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">ICT Repair Services</h5>
        <div class="card my-card">
          <img
            src="../assets/repair.jpg"
            class="card-img-top mycard-img"
            alt="Services displays"
          />
          <div class="card-body">
            <p class="card-text">
              We do Repairs, troubleshooting and maintenance of ICT assets e.g
              Printers, Laptops, Desktop computers e.t.c.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">Tutoring and Trainings</h5>
        <div class="card my-card">
          <img
            src="../assets/tutor.png"
            class="card-img-top mycard-img"
            alt="services display"
          />
          <div class="card-body">
            <p class="card-text">
              We do tutoring and trainings on software development, computer
              packages, and IT services in general.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-center py-2 mycard-title">
          Office Stationery Supplies
        </h5>
        <div class="card my-card">
          <img
            src="../assets/supplies.jpg"
            class="card-img-top mycard-img"
            alt="Services Display"
          />
          <div class="card-body">
            <p class="card-text">
              We do office stationery supplies including toners, printing
              papers, laptops, printers, pens, notebooks among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.mycard-title {
  font-weight: 400;
  font-size: 20px;
  color: rgb(175, 55, 7);
}
.my-card {
  transition: transform 0.3s;
  .mycard-img {
    height: 174px;
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>
