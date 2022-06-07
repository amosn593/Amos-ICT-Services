<template>
  <div class="container">
    <h4 class="py-4">Featured Software Development Projects</h4>
    <hr class="my-4" />
    <div class="row my-3 py-4">
      <div class="col-md-3 my-2 py-2">
        <div class="card">
          <div class="card-header d-flex justify-content-around">
            <h6 class="card-text card-desc">KAFOSA Website</h6>
          </div>
          <img
            class="card-img-top card-image"
            src="../assets/kafosa.png"
            alt="Kafosa website website"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text">Website</p>
            <a
              href="https://kafosa.or.ke/"
              class="stretched1-link"
              target="_blank "
              ><button type="button" class="btn btn-secondary">
                View Project
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3 my-2 py-2">
        <!-- {% comment %} Card two {% endcomment %} -->
        <div class="card">
          <div class="card-header d-flex justify-content-around">
            <h6 class="card-text card-desc">Akiki Interior and Decor</h6>
          </div>
          <img
            class="card-img-top card-image"
            src="../assets/akiki.jpg"
            alt="Akiki Interior and Decor"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text">website.</p>
            <a
              href="https://akikiinterior.herokuapp.com/"
              class="stretched1-link"
              target="_blank "
              ><button type="button" class="btn btn-secondary">
                View Project
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3 my-2 py-2">
        <div class="card">
          <div class="card-header d-flex justify-content-around">
            <h6 class="card-text card-desc">E-kuku website</h6>
          </div>
          <img
            class="card-img-top card-image"
            src="../assets/ekuku.png"
            alt="E-kuku website"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text">e-commerce.</p>
            <a
              href="https://e-kuku.co.ke/"
              class="stretched1-link"
              target="_blank "
              ><button type="button" class="btn btn-secondary">
                View Project
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-3 my-2 py-2">
        <div class="card">
          <div class="card-header d-flex justify-content-around">
            <h6 class="card-text card-desc">Rol Properties Website</h6>
          </div>
          <img
            class="card-img-top card-image"
            src="../assets/rolproperties.jpeg"
            alt="Rol Properties Website"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text">Website.</p>
            <a
              href="https://rolproperties.com/"
              class="stretched1-link"
              target="_blank "
              ><button type="button" class="btn btn-secondary">
                View Project
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Featured",
};
</script>

<style lang="scss" scoped>
.card-image {
  height: 30vh !important;
}

.desc {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
