<template>
  <TopNav />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/our-services">Our Services</router-link> |
    <router-link to="/our-work">Our Work</router-link> |
    <router-link to="/contact-us">Contact Us</router-link>
  </nav>
  <router-view />
  <Footer />
</template>
<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/FooterView.vue";
export default {
  name: "App",
  components: {
    TopNav,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #e1e1e1;
  border-bottom: 1px solid black;

  a {
    // font-weight: bold;
    color: #2c3e50;
    margin: 1px 5px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #d54353;
    }
    &:hover {
      color: #d54353;
    }
  }
}
</style>
