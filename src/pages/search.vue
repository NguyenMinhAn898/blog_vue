<template>
  <div>
    <div class="search">
      <BlogSearch />
    </div>
    <div class="list-search py-3">
      <BlogList />
    </div>
  </div>
</template>

<script>
import BlogList from "../components/blog/BlogList.vue";
import BlogSearch from "../components/blog/BlogSearchForm.vue";

export default {
  name: "Search",
  data() {
    return {};
  },
  components: {
    BlogSearch,
    BlogList,
  },
};
</script>
