<template>
  <div class="card">
    <div class="card-header">
      <h2>Blog List</h2>
    </div>
    <div class="card-body">
      <div v-if="blogDetail">Heloo</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCreateEdit",
  props: {
    blogDetail: Object,
  },
};
</script>