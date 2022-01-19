<template>
  <Index />
</template>

<script>
import Index from "./layout/default.vue";

export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
html,
body {
  font-size: 14px;
}
</style>
