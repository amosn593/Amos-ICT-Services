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
        <p>Email: amosndonga@gmail.com</p>
      </div>
      <div class="col-md-6">
        <h5 class="heading">Contact Us Form</h5>
        <form>
          <div class="col-auto">
            <label class="col-form-label">Full Name</label>
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" name="name" required />
          </div>

          <div class="col-auto">
            <label class="col-form-label">Phone</label>
          </div>
          <div class="col-auto">
            <input type="number" class="form-control" name="phone" required />
          </div>

          <div class="form-group mb-3 mt-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" name="email" required />
          </div>

          <div class="mb-3 mt-3">
            <label class="form-label">Message</label>
            <textarea
              class="form-control"
              name="message"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="my-3 py-3 text-center">
            <button type="submit" class="btn btn-danger">Submit</button>
          </div>
        </form>
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
