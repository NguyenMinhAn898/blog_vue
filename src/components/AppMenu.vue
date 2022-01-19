<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <router-link to="/">
          <img
            class="mx-2"
            style="width: 18px; height: 18px"
            src="../assets/images/list.png"
          />
          Home</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link to="/search">
          <img
            class="mx-2"
            style="width: 18px; height: 18px"
            src="../assets/images/search.png"
          />Search</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link to="/news">
          <img
            class="mx-2"
            style="width: 18px; height: 18px"
            src="../assets/images/add.png"
          />News</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>
<style scoped>
.list-group-item {
  border: 0px;
  border-bottom: 1px solid black;
}
.list-group-item:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
a {
  color: #151618;
  text-decoration: unset;
}
.list-group-item {
  font-size: 18px;
}
</style>