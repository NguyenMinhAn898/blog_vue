<template>
  <div class="card">
    <div class="card-header">
      <h2>Blog List</h2>
    </div>
    <div class="card-body">
      <div v-if="!blogs">
        <h3>Khong co du lieu</h3>
      </div>

      <table v-else class="table table-bordered">
        <thead class="">
          <tr class="text-center">
            <th scope="col">Id</th>
            <th scope="col-3">Tin</th>
            <th scope="col-3">Loại</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Vị trí</th>
            <th scope="col">Ngày public</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" v-bind:key="blog">
            <th scope="row">{{ blog.id }}</th>
            <td>{{ blog.title }}</td>
            <td>{{ blog.title }}</td>
            <td>{{ blog.title }}</td>
            <td>{{ blog.title }}</td>
            <td>{{ blog.title }}</td>
            <td class="text-center">
              <button class="btn btn-outline-primary">Edit</button>
            </td>
            <td class="text-center">
              <button class="btn btn-outline-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogList",
  data() {
    return {};
  },
  props: {
    blogs: Array,
  },
};
</script>