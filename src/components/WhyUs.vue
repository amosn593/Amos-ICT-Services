<template>
  <div class="container">
    <h4 class="py-4">Why Choose Us</h4>
    <div class="row choose-us">
      <div class="col-md-4">
        <img src="../assets/like.png" alt="customer satsfaction" />
        <h5 class="py-3 choose-us-heading">Customer Satsfaction</h5>
        <p>We always ensure our customers are satsfied with our work.</p>
      </div>
      <div class="col-md-4">
        <img src="../assets/time.png" alt="customer satsfaction" />
        <h5 class="py-3 choose-us-heading">Delivery on Time</h5>
        <p>We always deliver our products to our customers on time.</p>
      </div>
      <div class="col-md-4">
        <img src="../assets/quality.png" alt="customer satsfaction" />
        <h5 class="py-3 choose-us-heading">Quality Service</h5>
        <p>We always offer quality products and services to our customers.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs",
};
</script>

<style lang="scss" scoped>
.choose-us {
  img {
    height: 80px;
  }
  .choose-us-heading {
    margin: 10px 0 5x 0;
    color: rgb(175, 55, 7);
  }
}
</style>
