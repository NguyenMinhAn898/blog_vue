<template>
  <div class="card">
    <div class="card-header">
      <h2>Blog List</h2>
    </div>
    <div class="card-body">
      <div v-if="blogs.length == 0">
        <h4>Không tồn tại dữ liệu !</h4>
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
          <tr v-for="blog in blogs" v-bind:key="blog" class="text-center">
            <th scope="row">{{ blog.id }}</th>
            <td class="col-4 text-start">{{ blog.title }}</td>
            <td class="col-2">{{ getCategoryName(blog.category) }}</td>
            <td class="col-1">{{ blog.public ? "Yes" : "No" }}</td>
            <td class="col-2">{{ getPlace(blog.position) }}</td>
            <td class="col-1">{{ blog.data_public }}</td>
            <td class="col-1">
              <button class="btn btn-outline-primary">Edit</button>
            </td>
            <td class="col-1">
              <button class="btn btn-outline-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Category from "../../store/Category";
import Place from "../../store/Place";

export default {
  name: "BlogList",
  data() {
    return {
      category: new Category(),
      place: new Place(),
    };
  },
  props: {
    blogs: Array,
  },
  methods: {
    getCategory(id) {
      return this.category.getDetail(id);
    },
    getCategoryName(id) {
      return this.category.getName(id);
    },
    getPlace(arrPlaceId) {
      return this.place.getName(arrPlaceId);
    },
  },
};
</script>