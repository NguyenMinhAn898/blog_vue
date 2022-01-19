<template>
  <div class="content">
    <div class="container-fluid navbar-menu">
      <div class="header-navbar">
        <Header />
      </div>
    </div>
    <div class="main container-fluid">
      <div class="row vh-80">
        <div class="col-md-2 py-3"><Menu /></div>
        <div class="col-md-10 p-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/AppHeader.vue";
import Menu from "../components/AppMenu.vue";
import Footer from "../components/AppFooter.vue";

export default {
  name: "DefaultValue",
  components: {
    Header,
    Menu,
    Footer,
  },
};
</script>
<style scoped>
.content {
  min-height: 100vh;
  width: 100%;
}
.navbar-menu {
  max-height: 100px;
  height: 80px;
  background-color: #303030;
}
.main {
  min-height: 80vh;
}
.vh-80 {
  height: 80vh !important;
}
.background-content {
  background-color: #9b9999;
}
.footer {
  min-height: 10vh;
  background-color: #303030;
}
</style>
