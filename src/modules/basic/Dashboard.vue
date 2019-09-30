<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3" style="background-color:black; height:700px;">
        <div class="col-sm-12" style="background-color:green; height: 300px;">
          <center>
            <div class="rounded-circle" style="position:relative; top:20px; background-color:white; height: 200px; width:200px; border-radius:50%"></div>
          </center><br>
          <center><h2>Hi {{myName}}</h2></center>
        </div>
        <div class="col-sm-12" style="background-color:blue; height: 50px;">
          <button>Course & Yr</button>
        </div>
        <div class="col-sm-12" style="background-color:pink; height: 50px;">
          <button>Personal info</button>
        </div>
        <div class="col-sm-12" style="background-color:violet; height: 50px;">
          <button>Logout</button>
        </div>
      </div>
      <div class="col-sm-9" style="background-color:grey;">
        <h1>Welcome to Dashboard {{myName}}</h1>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "card",
  data() {
    return {
      myName: sessionStorage.getItem("fname")
    };
  },
  component: {
  },
  methods: {
  }
};
</script>