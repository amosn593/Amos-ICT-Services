<template>
  <footer class="my-footer mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h6 class="py-3">Social Links</h6>
          <a
            class="social-links"
            href="https://github.com/amosn593 "
            target="_blank "
          >
            <fa :icon="['fab', 'github']" class="faicon github" />
          </a>
          <a
            class="social-links"
            href="https://www.facebook.com/ndongaamos "
            target="_blank "
          >
            <fa :icon="['fab', 'facebook']" class="faicon facebook" />
          </a>
          <a
            class="social-links"
            href="https://twitter.com/amosn593 "
            target="_blank "
          >
            <fa :icon="['fab', 'twitter']" class="faicon twitter" />
          </a>
          <a
            class="social-links"
            href="https://www.youtube.com/channel/UCoLUbL1GkxaCq0xIAkTtjEw"
            target="_blank "
          >
            <fa :icon="['fab', 'youtube']" class="faicon youtube" />
          </a>
        </div>
        <div class="col-md-4">
          <h6 class="py-3">AMOS ICT SERVICES</h6>
          <p>&copy; 2022</p>
          <p>All Rights Reserved</p>
        </div>
        <div class="col-md-4">
          <h6 class="py-3">Our Contacts</h6>
          <p>Texas Building</p>
          <p>Links Road, Nyali</p>
          <p>0702240787</p>
          <p>amosndonga@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.social-links {
  text-decoration: none;
  color: #fff;
}
.my-footer {
  padding: 30px 50px;
  background-color: rgb(37, 35, 35);
  color: #fff;
  //height: 35vh;
}

@media screen and (max-width: 480px) {
  .my-footer {
    //height: 50vh;
    padding: 30px 50px;
  }
}
.faicon {
  margin: 0 15px;
  height: 25px;
  transition: transform 0.2 ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}
.youtube:hover {
  color: red;
}

.twitter:hover {
  color: rgb(26, 26, 248);
}
.facebook:hover {
  color: rgb(34, 34, 204);
}
.github:hover {
  color: grey;
}
</style>
