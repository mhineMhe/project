<template>
  <div class="container" id="margTop">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6" id="backCol">
        <form
          class="col-lg-8 mx-auto text-white"
          style="margin-top: 30px;"
          @submit="onSubmit"
        >
          <center>
            <h1>Course and Year</h1>
          </center>
          <br>
          <div>
            <label>Course:</label>
            <br>
            <input type="text" v-model="course" class="form-control" placeholder="course">
          </div>
          <br>
          <div>
            <label>Year:</label>
            <br>
            <input type="text" v-model="year" class="form-control" placeholder="year">
          </div>
          <br>
          <center>
            <button type="submit" class="btn btn-success">Update</button>
          </center>
          <br>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#margTop {
  margin-top: 10%;
}
#backCol {
  background-color: $color;
}
</style>

<script>
import ROUTER from "router";
export default {
  data() {
    return {
      course: "",
      year: ""
    };
  },

  methods: {
    onSubmit() {
      sessionStorage.setItem("course", this.course);
      sessionStorage.setItem("year", this.year);
      ROUTER.push("/course&yr");
    }
  }
};
</script>

