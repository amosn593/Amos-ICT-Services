<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6 text-center">
        <h2 class="my-4">YOUR ICT SERVICES HUB</h2>
        <div class="container">
          <img
            class="intro-logo"
            src="../assets/intro-img.jpg"
            alt="profile logo"
          />
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="mt-4">Expert in</h3>
        <ul>
          <li class="my-2 py-2">
            Software Development, Maintenance and Upgrading.
          </li>
          <li class="my-2 py-2">
            ICT Assets Troubleshooting, Diagnoses and Repairs(Desktops, Laptops,
            Printers e.t.c).
          </li>
          <li class="my-2 py-2">
            CCTV Installation, Maintenance and Upgrading.
          </li>
          <li class="my-2 py-2">
            Project Planning, Management, Monitoring, Evaluation and Process
            Automation.
          </li>
          <li class="my-2 py-2">
            Cloud Computing( Microsoft Azure and Microsoft 365).
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IntroView",
};
</script>
<style lang="scss" scoped>
.intro-logo {
  width: 100%;
  border-radius: 5px;
}

li {
  list-style: none;
}
</style>
