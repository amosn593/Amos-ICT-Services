<template>
  <div class="contact">
    <h4 class="text-center mt-4 py-3">CONTACT US</h4>
  </div>
  <div class="container contact-us">
    <div class="row">
      <div class="col-md-6">
        <h5 class="heading">Our Address</h5>
        <p class="text-center">Texas Building Links Road, Nyali Mombasa</p>
        <p class="text-center">+254702240787</p>
        <p class="text-center">+254776464012</p>
        <p class="text-center mb-2">info@amosndonga.com</p>
        <p class="text-center mb-2">amosndonga@gamil.com</p>
        <div class="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.860739482109!2d39.68061091411853!3d-4.048818946017821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f1d6195cff%3A0x1619a53d8212a0ee!2sMkomani%20Post%20Office!5e0!3m2!1sen!2ske!4v1617876387862!5m2!1sen!2ske"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div class="col-md-6">
        <h5 class="text-start heading">Contact Us Form</h5>

        <form class="w-100">
          <div class="row mb-3">
            <label for="fullname" class="col-sm-4 col-form-label"
              >Full Name</label
            >
            <div class="col-sm-8">
              <input type="text" class="form-control" id="fullname" required />
            </div>
          </div>
          <div class="row mb-3">
            <label for="phonenumber" class="col-sm-4 col-form-label"
              >Phone Number</label
            >
            <div class="col-sm-8">
              <input
                type="phone"
                class="form-control"
                id="phonenumber"
                required
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="email" class="col-sm-4 col-form-label"
              >Email Address</label
            >
            <div class="col-sm-8">
              <input type="email" class="form-control" id="email" required />
            </div>
          </div>

          <div class="row mb-3">
            <label for="msg" class="col-sm-4 col-form-label">Message:</label>
            <div class="col-sm-8">
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="5"
                class="form-control"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-outline-danger my-3 p-2">
            Send
          </button>
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
