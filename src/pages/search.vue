<template>
  <div>
    <div class="search">
      <BlogSearch @searchBlog="searchBlog" />
    </div>
    <div class="list-search py-3">
      <BlogList :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";
import BlogSearch from "../components/blog/BlogSearchForm.vue";
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      blogs: [],
      keywords: "",
    };
  },
  components: {
    BlogSearch,
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
  methods: {
    searchBlog(value) {
      axios
        .get("http://localhost:3000/blogs?title_like=" + value)
        .then((res) => (this.blogs = res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>
