<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h2>Search Blog</h2>
      </div>
      <div class="card-body">
        <div class="row g-3 align-items-center">
          <div class="col-2">
            <label for="searchInput" class="col-form-label">Title :</label>
          </div>
          <div class="col-10">
            <input
              type="text"
              id="searchInput"
              class="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
        </div>
        <div class="row text-center">
          <div class="w-25 m-auto pt-3">
            <button class="btn btn-outline-success">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogSearchForm",
};
</script>