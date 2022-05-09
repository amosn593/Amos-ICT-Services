<template>
  <div class="contact">
    <h4 class="text-center mt-4 py-3">Contact Us</h4>
  </div>
  <div class="container contact-us">
    <div class="row">
      <div class="col-md-6">
        <h5 class="heading">Address</h5>
        <p>Texas Building, Nyali Road</p>
        <p>Nyali, Mombasa</p>
        <br />
        <br />
        <p>Phone: 0702240787</p>

        <p class="text-center">Phone 0776464012</p>

        <p>Email: amosndonga@gmail.com</p>
      </div>
      <div class="col-md-6">
        <h5 class="text-start heading">Contact Us Form</h5>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Full Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number:</label>
              <input
                type="number"
                class="form-control"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="msg">Message:</label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="5"
                class="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary my-3">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-us {
  .heading {
    color: rgb(175, 55, 7);
  }
}
</style>
