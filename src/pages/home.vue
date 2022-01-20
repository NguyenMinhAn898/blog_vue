<template>
  <BlogList :blogs="blogs" />
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      blogs: [],
    };
  },
  components: {
    BlogList,
  },
  created() {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => {
        this.blogs = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
