<template>
  <div class="container" id="contMargin">
    <center>
      <h1 style="font-size:80px;">
        Welcome {{fname}} {{lname}}
        <br>
      </h1>
      <br>
    </center>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4 mx-auto text-white" id="backCol">
        <br>
        <h4 style="margin-left:10%;">Course : {{course}}</h4>
        <br>
        <h4 style="margin-left:10%;">Year : {{year}}</h4>
        <br>
        <center>
          <div>
            <form @submit="onSubmit">
              <div>
                <button type="submit" class="btn btn-success">Update Course</button>
              </div>
            </form>
          </div>
        </center>
        <br>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#contMargin{
    margin-top: $margTop;
}
#backCol{
    background-color: $color;
}
</style>

<script>
import ROUTER from "router";
export default {
  data() {
    return {
      fname: sessionStorage.getItem("fname"),
      lname: sessionStorage.getItem("lname"),
      course: sessionStorage.getItem("course"),
      year: sessionStorage.getItem("year")
    };
  },

  methods: {
    onSubmit() {
      ROUTER.push("/addCY");
    }
  }
};
</script>

