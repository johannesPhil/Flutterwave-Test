<template>
  <div class="container">
    <headerNav />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import headerNav from "./components/headerNav";
import Footer from "./components/Footer";
import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
Vue.use(InfiniteLoading);
Vue.use(VueFilterDateFormat);
export default {
  name: "App",
  components: {
    headerNav,
    Footer
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f2f2f2;
  /* font-size: calc(14px + (28 - 14) * ((100vw - 300px) / (1600 - 300))); */
}
img {
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;
  min-height: 100vh;
  background-color: #f2f2f2;
}
</style>
