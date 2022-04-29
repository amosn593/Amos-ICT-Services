<template>
  <footer class="my-footer mt-5 py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h6 class="py-3">Social Links</h6>
          <fa :icon="['fab', 'github']" class="faicon github" />
          <fa :icon="['fab', 'facebook']" class="faicon facebook" />
          <fa :icon="['fab', 'twitter']" class="faicon twitter" />
          <fa :icon="['fab', 'youtube']" class="faicon youtube" />
        </div>
        <div class="col-md-4">
          <h6 class="py-3">AMOS ICT SERVICES</h6>
          <p>&copy; 2022</p>
        </div>
        <div class="col-md-4">
          <h6 class="py-3">Our Contacts</h6>
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
.my-footer {
  background-color: rgb(37, 35, 35);
  color: #fff;
  height: 30vh;
}

@media screen and (max-width: 480px) {
  .my-footer {
    height: 50vh;
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
