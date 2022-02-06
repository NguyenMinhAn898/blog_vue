<template>
  <div class="card">
    <div class="card-header">
      <h2>{{blogTitle}}</h2>
    </div>
    <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Tiêu đề</label>
            <input type="text" class="form-control" id="blogtitle" :value="blogDetail.title" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Mô tả ngắn</label
            >
            <textarea
              type="text"
              rows="4"
              class="form-control"
              :value="blogDetail.des"
              @input="body.des = $event.target.value"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Chi tiết</label
            >
            <textarea
              type="text"
              rows="6"
              class="form-control"
              :value="blogDetail.detail"
              @input="body.detail = $event.target.value"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh</label>
            <input class="form-control" type="file"  />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Vị trí: </label>
            <div class="px-3 row">
              <div v-for="item in Places.getData()" :key="item.id" class="form-check col-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :value="blogDetail.position"
                  v-model="body.position"
                  :checked="(blogDetail.position)?.some(i=> i == item.id )"
                />
                <label class="form-check-label" for=""
                  >{{item.name}}</label
                >
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Public</label>
            <div class="px-3 row">
              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="public"
                  value="true"
                  :checked="blogDetail.public"
                  v-model="body.public"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  name="public"
                  type="radio"
                  value="false"
                  :checked="!blogDetail.public"
                  v-model="body.public"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <div class="col-6">
              <label for="formFile" class="form-label">Loại :</label>
              <div class="input-group">
                <select class="form-select"  v-model="body.category" aria-label="Category selected">
                  <option :value="item.id" v-for="item in Categories.getData()" :key="item.id" :selected="blogDetail.category == item.id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="col-auto">
                <label for="formFile" class="form-label">Date Public :</label>
                <input
                  type="date"
                  :value="blogDetail.data_public"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </form>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-success">Submit</button>
        <button class="btn btn-primary mx-3">Clear</button>
      </div>
    </div>
  </div>
</template>
<script>
import Place from "../../store/Place.js"
import Category from "../../store/Category.js"

export default {
  name: "BlogCreateEdit",
  props: {
    blogDetail: {
      type: Object,
      default:()=>({
          id:0,
          title:"",
          des:"",
          detail:"",
          category:0,
          public:false,
          data_public:"",
          position:[],
          thumbs:"",
      })
    },
    blogTitle : String
  },
  data(){
    return {
      Places : new Place,
      Categories: new Category,
      body : {
        id:0,
          title:"",
          des:"",
          detail:"",
          category:0,
          public:false,
          data_public:"",
          position:[],
          thumbs:"",
      }
    }
  },
  methods: {
  },
  watch: {
    
  }
};
</script>