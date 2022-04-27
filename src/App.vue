<template>
  <TopNav />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/our-services">Our Services</router-link> |
    <router-link to="/our-products">Our Products</router-link> |
    <router-link to="/contact-us">Contact Us</router-link>
  </nav>
  <router-view />
</template>
<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
export default {
  name: "App",
  components: {
    TopNav,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
