<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-md-3">
        <img alt="Vue logo" src="../assets/menulogo.png" />
      </div>
      <div class="col-md-5">
        <h2 class="text-start mt-3">AMOS ICT SERVICES</h2>
      </div>
      <div class="col-md-4 d-flex">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex mt-4 mx-1">
              <img class="top-img" alt="phone" src="../assets/phone.png" />
              <p class="mx-1">070224078</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex mt-4 mx-1">
              <img class="top-img" alt="email" src="../assets/email.png" />
              <p class="mx-1 px-1">amosndonga@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TopNav",
};
</script>

<style scoped>
.top-img {
  height: 20px;
}
</style>
