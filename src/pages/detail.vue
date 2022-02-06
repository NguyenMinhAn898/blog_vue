<template>
  <div>
      <blog-detail :blogDetail="blogDetail"  :blogTitle="blogTitle"/>
  </div>
</template>

<script>
import BlogDetail from "../components/blog/BlogCreateEdit.vue";
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      blogDetail: {},
      blogTitle : "Edit",
      
    };
  },
  components: {
    BlogDetail,
  },
  created() {
    axios
      .get("http://localhost:3000/blogs/"+ this.getId())
      .then((response) => {
        this.blogDetail = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    getId(){
        return this.$route.params.id
    },
  },
};
</script>
